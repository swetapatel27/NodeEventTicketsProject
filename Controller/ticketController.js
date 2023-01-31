const Ticket = require('../models/Ticket');
const User = require('../models/User');


exports.getAllTickets = async function (req,res){

    const tickets = await Ticket.find({}).populate('user','name')
    return res.json({"msg":tickets})

}

exports.totalBillPerUser = async function(req,res){
    const docs = await Ticket.aggregate([{
        $group:{
            _id:"$user",
            "Total_Bill":{$sum:"$price"}
        }},{
        $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "_id",
            as: "user_doc",
        }
    },{
        $project:{"_id":1,"Total_Bill":1,"user_doc.name":1}
    }])
    return res.json(docs);
}

