const emitter = require("./restaurant");
const fs = require("fs");

emitter.on("zakaz", (item, count, table, client) => {
    const summa = item.price * count;
    const text = `Buxgalter: ${client} ${item.name} uchun ${summa} so'm tolaydi.\n`;
    fs.appendFileSync("buggalter.txt", text);
});
