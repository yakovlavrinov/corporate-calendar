import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import User from "./User.js";

const PORT = 5000;
const DB_URL = "mongodb://localhost:27017";

const app = express();

app.use(express.json());

app.use('/api', router)

app.get("/", (req, res) => {
    console.log(req.query);
    res.status(200).json("Сервер работает1212");
});



app.post("/adduser", async (req, res) => {
    try {
        const { lastname, firstname } = req.body;
        const user = await User.create({ lastname, firstname });
        console.log(req.body);
        res.json(user);
    } catch (e) {
        res.status(500).json(e);
    }
});

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();
