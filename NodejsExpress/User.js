import mongoose from "mongoose";

const User = new mongoose.Schema({
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
});

export default mongoose.model("User", User);
