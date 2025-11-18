const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.get("/", (req, res) =>{
    res.send("Backend Running..!");
});
//routes
app.use("/auth", authRoutes);
app.use("/pomodoro", pomodoroRoutes);
app.use("/notes", noteRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Server Running! ${PORT}`));

console.log("Loaded PORT:", process.env.PORT);
console.log("Loaded DB:", process.env.MONGO_URI);