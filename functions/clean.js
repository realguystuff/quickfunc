module.exports = (text, replace) => {
    replace = replace || null;

    if (typeof text !== "string") {
        text = require("util").inspect(text, { depth: 1 });
    }

    text = text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));

    if (replace !== null) {
        text = text
            .replace(/ /g, `${replace}` + String.fromCharCode(8203));
    }

    return text;
}