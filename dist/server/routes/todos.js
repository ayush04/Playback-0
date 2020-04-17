"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos_1 = require("../controllers/todos");
var router = express_1.Router();
router.post('/', todos_1.createTodo);
router.get('/', todos_1.getTodos);
router.post('/:id');
router.delete('/:id');
exports.default = router;
//# sourceMappingURL=todos.js.map