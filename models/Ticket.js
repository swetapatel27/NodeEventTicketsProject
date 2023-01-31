const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
 
const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;