const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    name:{type: String,},
    city: {type: String},
    email: {type: String},
    tickets:[{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }]
})

const User = mongoose.model('User', userSchema);
module.exports = User;
