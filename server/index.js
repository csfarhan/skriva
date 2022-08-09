const express = require('express');
const connectDB = require('./config/db');
const dotenv = require("dotenv").config();
const cors = require('cors');
const app = express();

// Connect database
connectDB();
// Parsing data as json
app.use(express.json())

// Cors init
app.use(cors());

app.use("/register", require("./routes/userRoutes"));
app.use("/login", require("./routes/authRoutes"));
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));