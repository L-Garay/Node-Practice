const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/dbConfig');

//Load env variables
dotenv.config({ path: './config/config.env' });

//Initial server setup
const app = express();

//Connect to the database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

//Middleware methods

//custom middleware
app.use(logger);
//third party middleware -- only running if environment is 'development'
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Starting up server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
