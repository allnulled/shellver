const main = async () => {
    try {
        await require(__dirname + "/../src/shellver-server.js").ShellverServer.create({ password: "okok", port: 8984 }).start();
    } catch(error) {
        // console.log(error);
    }
};

main();