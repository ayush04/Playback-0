"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils/utils");
var Todo = /** @class */ (function () {
    function Todo(text) {
        this.id = utils_1.randomNumber();
        this.text = text;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todos.js.map