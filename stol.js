const emitter = require("./restaurant");
const fs = require("fs");

emitter.on("zakaz", (item, count, table, client) => {
    const text = `Stol: Buyurtma ${client} tomonidan ${table}-stolda berildi.\n`;
    fs.appendFileSync("stol.txt", text);
});

