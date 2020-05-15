"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const search_1 = __importDefault(require("./routes/search"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/', search_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    });
});
/*connect('mongodb+srv://ayush:09WKUkeskOYXv8a3@pbcl0-mekwn.mongodb.net/playback?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000);
    })
    .catch(err => console.log('Cannot connect to DB', err));*/
app.listen(3000);
//# sourceMappingURL=app.js.map