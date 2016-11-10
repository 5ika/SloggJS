const logger = (displayer, msg) => {
    if (typeof msg == 'object') {
        console.log(displayer(JSON.stringify(msg)));
    } else {
        console.log(displayer(msg));
    }
}
module.exports = logger;
