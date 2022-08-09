const express = require('express');
const connectDB = require('./config/db');
const dotenv = require("dotenv").config();
const cors = require('cors');
const app = express();

// Connect database
connectDB();
app.use(express.json())

app.use(cors());

app.get('/', (req,res) => res.send('API Running'));

app.use("/user", require("./routes/userRoutes"));
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));