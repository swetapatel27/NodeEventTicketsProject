const express = require('express')
const Route = express.Router()
const {getAllTickets,totalBillPerUser}= require('../../Controller/ticketController');

Route.get('/getAllTickets',getAllTickets);
Route.get('/totalBillPerUser',totalBillPerUser);

module.exports = Route;