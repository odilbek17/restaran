const emitter = require("./restaurant");
const fs = require("fs");

emitter.on("zakaz", (item, count, table, client) => {
    const text = `Oshxona: ${count} dona ${item.name} ${client} uchun tayyorlanyapti (stol ${table}).\n`;
    fs.appendFileSync("oshxona.txt", text);
});
