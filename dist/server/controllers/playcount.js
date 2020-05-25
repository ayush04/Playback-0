"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playcount_1 = require("../models/playcount");
exports.updatePlayCount = (req, res) => {
    const songId = req.params.id;
    playcount_1.Playcount.findOneAndUpdate({ songId: songId }, { "$inc": { "count": 1 } }, { upsert: true }).then(response => {
        return res.status(201).json(response);
    })
        .catch(err => {
        return res.status(400).json(err);
    });
};
//# sourceMappingURL=playcount.js.map