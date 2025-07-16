const emitter = require("./restaurant");
const fs = require("fs");

emitter.on("zakaz", (item, count, table, client) => {
    const text = `Qaralgan stul: ${client} ${table}-stolga xizmat qildi.\n`;
    fs.appendFileSync("qaralganStul.txt", text);
});
