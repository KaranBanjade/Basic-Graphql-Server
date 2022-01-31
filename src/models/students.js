const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    email:{
        type:String,
        required: true,
        unique: [true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("INVALID EMAIL!")
            }
        }
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    }
})

// We will create a new collection using model
const Student = new mongoose.model('Student', studentSchema)
module.exports = Student