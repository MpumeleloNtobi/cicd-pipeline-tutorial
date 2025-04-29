import express from "express";
import ToDo from "./ToDo.js";

const app = express();
const PORT = process.env.PORT || 3000;

const todo = [];

app.get("/", (req, res) => {
    res.status(200).send("Hello, world");
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})