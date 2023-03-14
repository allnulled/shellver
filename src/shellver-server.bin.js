#!/usr/bin/env node

const parameters = {};
let next_is = undefined;

Parametrization: {
    process.argv.forEach(arg => {
        if(typeof next_is === "string") {
            parameters[next_is] = arg;
            next_is = undefined;
        }
        if (["--password", "--pass", "-w"].indexOf(arg) !== -1) {
            next_is = "password";
        } else if (["--port", "-p"].indexOf(arg) !== -1) {
            next_is = "port";
        } else if (["--no-gui", "-n"].indexOf(arg) !== -1) {
            parameters.gui = false;
        } else if (["--trace", "-t"].indexOf(arg) !== -1) {
            parameters.trace = true;
        } else if (["--app-directory", "-d"].indexOf(arg) !== -1) {
            next_is = "app_directory";
        } else if (["--app-url-path", "-u"].indexOf(arg) !== -1) {
            next_is = "app_url_path";
        } else if (["--app-extension", "-x"].indexOf(arg) !== -1) {
            next_is = "app_extension";
        } else if (["--help"].indexOf(arg) !== -1) {
            console.log(`

[ Welcome to «shellver-server» command line help ]

[ Usage: ]

~$   shellver-server
        --password $1        # required (text). also: -w
        --port $2            # required (number). also: -p
        --app-directory $3   # optional (text). also: -d
        --app-url-path $4    # optional (text). also: -u
        --app-extension $4   # optional (text). also: -x
        --no-gui             # optional (boolean). also: -n
        --trace              # optional (boolean). also: -t
        --help               # optional (boolean). also: -h

[ Notes: ]

  · If --no-gui is not specified, the gui is started
  · If --app-directory is not specified, the Shellver GUI app is set
    This means the app served as gui points to internal shellver gui source
    This means that changing this parameter, you can emulate your own desktop apps
  · If --app-url-path is not specified, the root "/" is set
    This means the app is opened on browser with "/" as appendix
    This means it will fallback automatically to the "/index.html" if so
  · If --app-extension is not specified, no file is loaded before server and socket connections
    This means if it is specified, the file is loaded as app extension
    This app_extension must be a js module that exports a function.
    This function is called.
  · If --trace is specified, it shows logs for each method and function run
  · If --help is specified, it shows this help and exits the program

`);
            process.exit(0);
        }
    });
}
Validation: {
    if(typeof parameters.password !== "string") {
        throw new Error("shellver.bin.js requires password to be a string");
    } else if(typeof parameters.port !== "string") {
        throw new Error("shellver.bin.js requires port to be a string");
    } else if (Number.isNaN(Number.parseInt(parameters.port))) {
        throw new Error("shellver.bin.js requires port to be a string that conforms a number");
    }
}
Execution: {
    require(__dirname + "/shellver-server.js").ShellverServer.create(parameters).start();
}