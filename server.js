const express = require('express');
const app = express();
const route = require('./route.js')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect('mongodb://127.0.0.1:27017/anonymous')
mongoose.connection.once('open', () => console.log('connected to db'));
app.use(express.json())
app.use(cors({
  origin: '*'
}));
app.use(express.urlencoded({ extended: false }));
app.use("/",route)
app.listen(7000, () => console.log('server running'));