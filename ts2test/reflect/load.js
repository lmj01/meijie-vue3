"use strict";
exports.__esModule = true;
exports.load = void 0;
var fs = require("fs");
var provider_1 = require("./provider");
function load(container) {
    var list = fs.readdirSync('./');
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var file = list_1[_i];
        if (/\.ts$/.test(file)) { // 扫描 ts 文件
            var exports_1 = require("./" + file);
            for (var m in exports_1) {
                var module_1 = exports_1[m];
                if (typeof module_1 === 'function') {
                    var metadata = Reflect.getMetadata(provider_1.CLASS_KEY, module_1);
                    // 注册实例
                    if (metadata) {
                        container.bind(metadata.id, module_1, metadata.args);
                    }
                }
            }
        }
    }
}
exports.load = load;
