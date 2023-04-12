require(__dirname + "/static/js/calo.js");
const http = require("http");
const express = require("express");
const cors = require("cors");
const path = require("path");
const child_process = require("child_process");
const socket_io = require("socket.io");
const LL = console.log;
class ShellverSocket {
    static create(...args) { return new this(...args); }
    static default_options = {};
    constructor(shellver_server, socket, options_arg = {}, extensions_arg = {}) {
        this.options = Object.assign({}, this.constructor.default_options, options_arg);
        this.shellver_server = shellver_server;
        this.trace("ShellverSocket.constructor");
        this.socket = socket;
        Object.assign(this, extensions_arg);
    }
    on_initialization() {
        this.trace("ShellverSocket.on_initialization");
        this.socket.on("shellver.command.nodejs.input", async (data) => {
            let execution_id = undefined;
            try {
                this.trace("ShellverSocket.socket.on('shellver.command.nodejs.input')");
                await this.shellver_server.on_authentication(this, data);
                if(typeof data !== "object") {
                    throw new Error("ShellverSocket requires «data» to be an object on event «shellver.command.nodejs.input»");
                } else if(typeof data.code !== "string") {
                    throw new Error("ShellverSocket requires «data.code» to be a string on event «shellver.command.nodejs.input»");
                }
                if (data.execution_id) {
                    execution_id = data.execution_id;
                }
                const print = this.create_respond({ execution_id });
                const code_input = `(async (print) => {\n  try{\n\n${data.code}\n\n} catch (error) {\n  throw error;\n}})(print)`;
                console.log("Evaluating:", code_input);
                const result = eval(code_input);
                const output = await result;
                const answer = { output };
                if(execution_id) {
                    answer.execution_id = data.execution_id;
                }
                this.trace("ShellverSocket.socket.emit('shellver.command.nodejs.output')");
                this.socket.emit("shellver.command.nodejs.output", answer);
            } catch (error) {
                this.trace("ShellverSocket.socket.on('shellver.command.nodejs.input'):error");
                if(execution_id) {
                    error.execution_id = execution_id;
                }
                this.shellver_server.on_error(this, error);
            }
        });
    }
    trace(...args) {
        return this.shellver_server.trace(...args);
    }
    create_respond(data_arg) {
        return output => {
            return this.respond(output, data_arg);
        };
    }
    respond(output, data_arg = {}) {
        this.trace("ShellverSocket.respond");
        const data = Object.assign({}, data_arg, { output })
        this.trace("ShellverSocket.socket.emit('shellver.command.nodejs.output')");
        this.socket.emit("shellver.command.nodejs.output", data);
    }
}

class ShellverServer {
    static create(...args) { return new this(...args); }
    static default_options = { 
        restrict_origin_to: "*", 
        gui: true, 
        app_directory: __dirname + "/static", 
        app_url_path: "/", 
        max_sockets: 1, 
        trace: false, 
        app_extension: false,
    };
    constructor(options_arg = {}, extensions_arg = {}, socket_options_arg = {}, socket_extensions_arg = {}) {
        this.options = Object.assign({}, this.constructor.default_options, options_arg);
        this.trace("ShellverServer.constructor");
        if(typeof this.options.password !== "string") {
            throw new Error("ShellverServer requires «options.password» to be a string on constructor");
        }
        if (["string","number"].indexOf(typeof this.options.port) === -1) {
            throw new Error("ShellverServer requires «options.port» to be a string or a number on constructor");
        }
        this.shellver_socket_class = ShellverSocket;
        this.express_app = express();
        this.express_app.use("*", cors());
        this.express_app.use("/", express.static(this.options.app_directory, { etag: false }));
        this.http_server = http.createServer(this.express_app);
        this.socket_io_server = new socket_io.Server(this.http_server, { cors: { origin: this.options.restrict_origin_to, methods: ["GET","POST","PUT","DELETE"] } });
        Object.assign(this, extensions_arg);
        this.socket_io_server.on("connection", async (socket) => {
            try {
                this.trace("ShellverServer.socket_io_server.on('connection')");
                await this.on_validation(socket);
                const shellver_socket = new this.shellver_socket_class(this, socket, socket_options_arg, socket_extensions_arg);
                shellver_socket.on_initialization();
            } catch(error) {
                this.trace("ShellverServer.socket_io_server.on('connection'):error");
                this.on_error_from_socket(socket, error);
                socket.disconnect();
            }
        });
        if (this.options.app_extension) {
            try {
                const extension_factory = require(this.options.app_extension);
                if(typeof extension_factory !== "function") {
                    throw new Error("Options «app_extension» script must export a function (" + this.options.app_extension + ")");
                }
                this.extension_module = extension_factory.call(this);
            } catch(error) {
                console.log("Failed to load shellver-server extension (" + this.options.app_extension + "):", error);
            }
        }
    }
    start() {
        this.trace("ShellverServer.start");
        return new Promise((ok, fail) => {
            this.http_server.listen(this.options.port, (error) => {
                if (error) {
                    return fail(error);
                }
                this.trace("ShellverServer.http_server.on('listening')");
                const target_url = "http://127.0.0.1:" + this.options.port + this.options.app_url_path;
                console.log("[✓] Running shellver-server on: " + target_url);
                if (this.options.gui === true) {
                    this.on_running_gui(target_url);
                }
                return ok();
            });
        });
    }
    trace(...args) {
        if(this.options.trace) {
            console.log("[TRACE]", ...args);
        }
    }
    on_running_gui(target_url) {
        this.trace("ShellverServer.on_running_gui");
        const command_for_firefox = ["firefox", ["-ssb", target_url]];
        const command_for_gchrome = ["google-chrome", ["--app=" + target_url]];
        const command_for_start = ["start", [target_url]];
        const browser_attempt_1 = child_process.spawn(...command_for_gchrome);
        browser_attempt_1.on("exit", () => process.exit(0));
        browser_attempt_1.on("error", () => {
            const browser_attempt_2 = child_process.spawn(...command_for_firefox);
            browser_attempt_2.on("exit", () => process.exit(0));
            browser_attempt_2.on("error", () => {
                const browser_attempt_3 = child_process.spawn(...command_for_gchrome);
                browser_attempt_3.on("exit", () => process.exit(0));
                browser_attempt_3.on("error", () => {
                    console.log("[·] Caution: to open the user interface automatically, install for command line: google-chrome or firefox.")
                });
            });
        });
    }
    on_authentication(shellver_socket, data) {
        this.trace("ShellverServer.on_authentication");
        if (data.password !== this.options.password) {
            throw new Error("Authorization not correct");
        }
    }
    async on_validation(socket) {
        this.trace("ShellverServer.on_validation");
        const all_sockets = await this.socket_io_server.allSockets();
        if (all_sockets.size > this.options.max_sockets) {
            this.trace("ShellverSocket.socket.emit('shellver.command.nodejs.error')");
            socket.emit("shellver.command.nodejs.error", {
                error: {
                    name: "Maximum clients reached error",
                    message: "The number of clients connected to this instance is reached for now"
                },
            });
            this.trace("ShellverSocket.on_end");
            socket.disconnect();
        }
    }
    on_error(shellver_socket, error) {
        this.trace("ShellverServer.on_error");
        this.trace("ShellverSocket.socket.emit('shellver.command.nodejs.error')");
        this.trace(error);
        shellver_socket.socket.emit("shellver.command.nodejs.error", this.format_error_for_response(error));
    }
    on_error_from_socket(socket, error) {
        this.trace("ShellverServer.on_error_from_socket");
        this.trace("ShellverSocket.socket.emit('shellver.command.nodejs.error')");
        this.trace(error);
        socket.emit("shellver.command.nodejs.error", this.format_error_for_response(error));
    }
    format_error_for_response(error) {
        return {
            error: {
                name: error.name,
                message: error.message,
            },
            execution_id: error.execution_id
        };
    }
}

const api = { ShellverServer, ShellverSocket };
api.default = api;

module.exports = api;