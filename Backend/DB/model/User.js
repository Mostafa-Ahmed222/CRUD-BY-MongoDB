import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        require : true,
    },
    lastName : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    },
    age : Number
}, {
    timestamps : true
})

const userModle = mongoose.model('User', userSchema)

export default userModle