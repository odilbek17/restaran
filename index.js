require("./buggalter");
require("./oshxona");
require("./ombor");
require("./kassa");
require("./xodimlar");
require("./stol");
require("./qaralganStul");
require("./stulMahsulot");
require("./maxsulotlar");

const emitter = require("./restaurant");

emitter.emit("zakaz", {name: "osh", price: 25.000, id: 1}, 2, 1, "Sarvar");
emitter.emit("zakaz", {name: "cola", price: 8.000, id: 2}, 1, 1, "Sarvar");
emitter.emit("zakaz", {name: "non", price: 3.000, id: 3}, 4, 2, "Alex");
emitter.emit("zakaz", {name: "lag'mon", price: 27.000, id: 4}, 2, 3, "Jamshid");
emitter.emit("zakaz", {name: "choy", price: 2.000, id: 5}, 3, 2, "Dilshod");
emitter.emit("zakaz", {name: "salat", price: 15.000, id: 6}, 1, 1, "Gulnora");
emitter.emit("zakaz", {name: "shashlik", price: 30.000, id: 7}, 3, 4, "Aziz");
emitter.emit("zakaz", {name: "manti", price: 22.000, id: 8}, 2, 5, "laylo");
