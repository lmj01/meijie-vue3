"use strict";
exports.__esModule = true;
exports.Inject = exports.PROPS_KEY = void 0;
require("reflect-metadata");
exports.PROPS_KEY = 'ioc:inject_props';
function Inject() {
    return function (target, targetKey) {
        var annotationTarget = target.constructor;
        var props = {};
        if (Reflect.hasOwnMetadata(exports.PROPS_KEY, annotationTarget)) {
            props = Reflect.getMetadata(exports.PROPS_KEY, annotationTarget);
        }
        props[targetKey] = {
            value: targetKey
        };
        Reflect.defineMetadata(exports.PROPS_KEY, props, annotationTarget);
    };
}
exports.Inject = Inject;
