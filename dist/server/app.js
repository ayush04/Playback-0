"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = require("mongoose");
const search_1 = __importDefault(require("./routes/search"));
const secret_1 = __importDefault(require("./routes/secret"));
const playlist_1 = __importDefault(require("./routes/playlist"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.json());
app.use('/', search_1.default);
app.use('/secret', secret_1.default);
app.use('/', playlist_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    });
});
mongoose_1.connect('mongodb+srv://ayush:09WKUkeskOYXv8a3@pbcl0-mekwn.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => {
    app.listen(3000);
})
    .catch(err => console.log('Cannot connect to DB', err));
//app.listen(3000);
//# sourceMappingURL=app.js.map