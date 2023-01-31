const mongoose = require('mongoose');
const User = require('../models/User');
const Ticket = require('../models/Ticket');


exports.getUsers = async function(req,res){
    
    const users = await User.find().populate({
        path:'tickets',
        select:['name','price']
    })
    return res.json({"test":users});
}

exports.saveUSer = async function(req,res){
const {name,city,email}= req.body
const user = new User({name:name,city:city,email:email})

await user.save();

return res.json({'msg':user})

}


exports.getCountofAdmin = async function(Req,res){
    console.log("count")

    const adminCount = await User.aggregate([{$match:{"isAdmin":true}},{$group:{_id:"$isAdmin","isAdmin":{$sum:1}}}])
    // console.log(adminCount)
    res.json(adminCount);
}

exports.getCountofUsers = async function(Req,res){
    console.log("count")

    const adminCount = await User.aggregate([
    {$match:{"isAdmin":false}},
    {$group:{_id:"$isAdmin","total-users":{$sum:1}}},
    {$project:{_id:0}}])
    res.json(adminCount);
}



