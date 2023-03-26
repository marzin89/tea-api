const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app = express();

let port = process.env.PORT;

if (port == null || port == '') {
    port = 4040;
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const mongoDB = 'mongodb://127.0.0.1:27017/teadb';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Det gick inte att ansluta till databasen'));

const teaRouter    = require('./routes/tea-router');
const userRouter   = require('./routes/user-router');
const ratingRouter = require('./routes/rating-router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
}));
app.use('/teas', teaRouter);
app.use('/users', userRouter);
app.use('/ratings', ratingRouter);

module.exports = app;
