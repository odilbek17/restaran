const emitter = require("./restaurant");
const fs = require("fs");

emitter.on("zakaz", (item, count, table, client) => {
    const summa = item.price * count;
    const text = `Kassa: ${client} dan ${summa} som tushdi.\n`;
    fs.appendFileSync("kassa.txt", text);
});