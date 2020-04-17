"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos_1 = require("../models/todos");
var TODOS = [];
exports.createTodo = function (req, res) {
    var text = req.body.text;
    var newTodo = new todos_1.Todo(text);
    TODOS.push(newTodo);
    res.status(201).json({
        message: 'Todo created'
    });
};
exports.getTodos = function (req, res) {
    return res.status(200).json(TODOS);
};
//# sourceMappingURL=todos.js.map