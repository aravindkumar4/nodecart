const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./userRouter');
const morgan = require('morgan');
const cors = require('cors');
app.use(express.json());
app.use(morgan('dev'));

app.use(cors());

app.use('/api', userRouter);

app.listen(7777, () => {
  console.log('localhost created successfully');
});
mongoose.connect(
  'mongodb://localhost:27017/mernauth',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('mongo connected successfully');
  }
);
