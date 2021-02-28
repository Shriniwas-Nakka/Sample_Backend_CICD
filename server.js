const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('./Routes/route');

const port = 5000;
app.use(cors());
app.use(express.json());
app.use('/', routes)

app.listen(port, () => {
    console.log(`Server has started on port ${port} !`);
    mongoose.connect('mongodb://localhost:27017/users').then(() => {
        console.log('Connection established successfully !');
    }).catch(() => {
        console.log('Failed to connect !');
    })
})

