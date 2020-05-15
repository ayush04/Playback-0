"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const search_1 = require("../controllers/search");
const router = express_1.Router();
router.get('/alive', search_1.alive);
router.get('/search/:query');
exports.default = router;
//# sourceMappingURL=search.js.map