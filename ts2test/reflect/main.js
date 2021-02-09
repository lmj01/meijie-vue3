"use strict";
exports.__esModule = true;
var container_1 = require("./container");
var load_1 = require("./load");
var container = new container_1.Container();
load_1.load(container);
console.log(container.get('a')); // => A { b: B { p: 10 } }
