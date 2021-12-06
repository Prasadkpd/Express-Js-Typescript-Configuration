"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (request, response) => {
    response.send(`a get request on port ${PORT}`);
    // response.sendStatus(200);
});
app.post('/new', (request, response) => {
    response.send(`a post request with /new route on port ${PORT}`);
    // response.sendStatus(200);  
});
app.put("/put", (request, response) => {
    response.send(`a put request with /new route on port ${PORT}`);
});
app.delete("/delete", (request, response) => {
    response.send(`a delete request with /new route on port ${PORT}`);
});
app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
