const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./userRouter');

const app = express();

// CORS configuration

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.DB).then((host) => {
    console.log(`Database connected: ${host.connection.host}`);
}).catch((err) => {
    console.log(err);
});

app.use('/api/user', userRouter);
app.use('/images', express.static('uploads'));

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
