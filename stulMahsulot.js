const emitter = require("./restaurant");
const fs = require("fs");

emitter.on("zakaz", (item, count, table, client) => {
    const text = `Stulga mahsulot: ${table}-stolga ${count} dona ${item.name} berildi (${client}).\n`;
    fs.appendFileSync("stulMahsulot.txt", text);
});

