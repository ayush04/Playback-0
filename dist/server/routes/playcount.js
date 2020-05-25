"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playcount_1 = require("../controllers/playcount");
const router = express_1.Router();
router.post('/playcount/:id', playcount_1.updatePlayCount);
exports.default = router;
//# sourceMappingURL=playcount.js.map