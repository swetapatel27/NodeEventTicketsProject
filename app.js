const express = require('express');
const conn = require('./db');
const app = express();
const userRoute = require('./Routes/Users/Users')
const ticketRoute = require('./Routes/Tickets/Tickets');

conn;
app.use('/api',userRoute)
app.use('/api',ticketRoute)

module.exports = app;