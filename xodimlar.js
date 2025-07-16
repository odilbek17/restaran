const emitter = require("./restaurant");
const fs = require("fs");

emitter.on("zakaz", (item, count, table, client) => {
    const summa = item.price * count;
    const oshpaz = summa * 0.1;
    const omborchi = summa * 0.05;
    const text = `Xodimlar: ${client} buyurtmasidan oshpazga ${oshpaz} som, omborchiga ${omborchi} som.\n`;
    fs.appendFileSync("xodimlar.txt", text);
});
