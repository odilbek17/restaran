const emitter = require("./restaurant");
const fs = require("fs");

emitter.on("zakaz", (item, count, table, client) => {
    const text = `Ombor: ${item.name} ombordan olindi (${count} dona).\n`;
    fs.appendFileSync("ombor.txt", text);
});
