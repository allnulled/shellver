
window.ShellverClient = class {
    static default_options = {
        extraHeaders: {},
        on_connect: () => {
            console.log("[✓] Successful «shellver-client» connection on:\n  - " + this.url);
        },
        on_disconnect: function() {
            console.log("[✗] Failed connection «shellver-client» to " + this.url);
        }
    };
    constructor(url, options_arg = {}, ) {
        this.options = Object.assign({}, this.constructor.default_options, options_arg);
        this.options.extraHeaders["Shellver-Client"] = "yes";
        this.url = url ? url : window.location.host;
        this.socket = window.io(this.url, this.options);
        this.socket.on("connect", this.options.on_connect);
        this.socket.on("disconnect", this.options.on_disconnect);
        this.events = {};
        this.executions_id = 0;
        this.executions = {};
        this.channels = {};
        this.noop = function() {};
        ["shellver.command.nodejs.output", "shellver.command.nodejs.error"].forEach(it => {
            this.socket.on(it, data => this.trigger_events.call(this, it, data));
            this.socket.on(it, data => this.trigger_events.call(this, it, data));
        });
    }
    on(event, callback) {
        this.events[event] = callback;
        return this;
    }
    off(event) {
        delete this.events[event];
        return this;
    }
    trigger_events(original_event, data, ...args) {
        if(typeof data === "object") {
            if(typeof data.execution_id === "number") {
                if(data.execution_id in this.executions) {
                    if(typeof data.error !== "undefined") {
                        const error = new Error(data.error.message);
                        Object.assign(error, { name: data.error.name, $shellver_data: data });
                        this.executions[data.execution_id].fail(error);
                    } else {
                        this.executions[data.execution_id].resolve(data);
                    }
                }
            }
        }
        const event_ids = Object.keys(this.events);
        for(let index = 0; index < event_ids.length; index++) {
            const event_id = event_ids[index];
            const event_call = this.events[event_id];
            event_call(original_event, data, ...args);
        }
    }
    run_in_nodejs(callback) {
        const execution_id = ++this.executions_id;
        let callback_code = `(${callback.toString()})()`;
        if(typeof callback === "function") {
            callback_code = `return (${callback.toString()})()`;
        } else if (typeof callback === "string") {
            callback_code = callback;
        } else {
            throw new Error("ShellverClient requires callback to be a function or a string on run_in_nodejs");
        }
        const question = {
            code: callback_code,
            execution_id,
            password: this.options.password,
        };
        let temp = { resolver: this.noop, failter: this.noop };
        const execution_promise = new Promise((ok, fail) => {
            temp.resolver = (...args) => {
                console.log("[✓] Reception of «shellver-client» on execution #" + execution_id);
                ok(...args);
            };
            temp.failer = (...args) => {
                console.log("[✗] Failed reception of «shellver-client» on execution #" + execution_id);
                fail(...args);
            };
        });
        this.executions[execution_id] = execution_promise;
        execution_promise.resolve = temp.resolver;
        execution_promise.fail = temp.failer;
        console.log("[?] Emision of «shellver-client» on execution #" + execution_id);
        this.socket.emit("shellver.command.nodejs.input", question);
        return execution_promise;
    }
    open_nodejs_channel() {
        // @TOGET:
        // const shellver_channel = shellver_client.open_nodejs_channel("some id")
        // shellver_channel.on( "success", "custom-id", () => {});
        // shellver_channel.off("success", "custom-id");
        // shellver_channel.on( "error", "custom-id", () => {});
        // shellver_channel.off("error", "custom-id");
        // shellver_channel.on( "end", "custom-id", () => {});
        // shellver_channel.off("end", "custom-id");
        // shellver_channel.cllose();
        // 
    }
};