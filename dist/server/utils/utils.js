"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomNumber = function () {
    var random = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (random() + random() + '-' + random() + '-' + random() + '-' + random() + random());
};
exports.randomNumber = randomNumber;
//# sourceMappingURL=utils.js.map