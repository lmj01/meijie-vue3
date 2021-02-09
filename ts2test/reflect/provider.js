"use strict";
exports.__esModule = true;
exports.Provider = exports.CLASS_KEY = void 0;
require("reflect-metadata");
exports.CLASS_KEY = 'ioc:tagged_class';
function Provider(identifier, args) {
    return function (target) {
        Reflect.defineMetadata(exports.CLASS_KEY, {
            id: identifier,
            args: args || []
        }, target);
        return target;
    };
}
exports.Provider = Provider;
