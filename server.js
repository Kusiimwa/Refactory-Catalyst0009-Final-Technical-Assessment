
//Dependencies.
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const port = 3000;
const app = express();

require('dotenv').config();

// Database connection.
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection is now  open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });


const StudentRegRoutes = require('./routes/StudentRegRoutes');
const StudentReg = require('./models/StudentRegModels');


// Configurations.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/views'));



// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));
app.use('/public/imagefiles', express.static(__dirname + '/public/imagefiles'));
app.use('/', StudentRegRoutes);







app.listen(port, () => {
  console.log(`We are currently listening on port ${port}`);
});