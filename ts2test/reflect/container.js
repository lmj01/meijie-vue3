"use strict";
exports.__esModule = true;
exports.Container = void 0;
var inject_1 = require("./inject");
var Container = /** @class */ (function () {
    function Container() {
        this.bindMap = new Map();
    }
    Container.prototype.bind = function (identifier, clazz, constructorArgs) {
        this.bindMap.set(identifier, {
            clazz: clazz,
            constructorArgs: constructorArgs || []
        });
    };
    Container.prototype.get = function (identifier) {
        var target = this.bindMap.get(identifier);
        var clazz = target.clazz, constructorArgs = target.constructorArgs;
        var props = Reflect.getMetadata(inject_1.PROPS_KEY, clazz);
        var inst = Reflect.construct(clazz, constructorArgs);
        for (var prop in props) {
            var identifier_1 = props[prop].value;
            // 递归获取注入的对象
            inst[prop] = this.get(identifier_1);
        }
        return inst;
    };
    return Container;
}());
exports.Container = Container;
