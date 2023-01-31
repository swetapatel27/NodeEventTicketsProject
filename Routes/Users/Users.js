const express = require('express')
const Route = express.Router();
const {getUsers,saveUSer,getCountofAdmin,getCountofUsers} = require('../../Controller/userController');
// const getCountofAdmin = require('../../Controller/userController');

Route.get('/getUsers',getUsers);
Route.post('/saveuser',saveUSer);
Route.get('/getAdminCount',getCountofAdmin);
Route.get('/getuserCount',getCountofUsers);

module.exports = Route;