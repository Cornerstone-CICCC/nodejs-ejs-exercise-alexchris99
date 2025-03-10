"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const dummt_routes_1 = __importDefault(require("./routes/dummt.routes"));
dotenv_1.default.config();
// create the server route
const app = (0, express_1.default)();
// middleware
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../src/views'));
//routes
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use("/", dummt_routes_1.default);
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});
