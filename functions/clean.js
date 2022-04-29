module.exports = async (text, replace) => {
    replace = replace || null;
    if (text && text.constructor.name == "Promise") {
        text = await text;
    }

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