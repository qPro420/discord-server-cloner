const COLOR = require(`chalk`);

exports.info = (...message) => {
    console.log(COLOR.green(`[INFO] -> ` + COLOR.white(...message)));
};

exports.message = message => {
    console.log(COLOR.yellow(`[APP] -> ` + COLOR.white(...message)));
};