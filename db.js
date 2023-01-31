const mongoose = require('mongoose')

const url = "mongodb+srv://test:1234@gql-cluster.3ipfgax.mongodb.net/?retryWrites=true&w=majority";
const conn = mongoose.connect(url).then(()=>{
    console.log("connected")
}).catch((error)=>{
    console.log("error",error)
})

module.exports = conn;