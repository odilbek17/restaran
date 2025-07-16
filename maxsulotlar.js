const emitter = require("./restaurant");
const fs = require("fs");

emitter.on("zakaz", (item, count, table, client) => {
    const text = `Mahsulot: ${item.name} - ${count} dona - ${item.price} som.\n`;
    fs.appendFileSync("maxsulotlar.txt", text);
});
