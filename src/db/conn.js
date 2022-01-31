const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/TempApi",{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=>{
    console.log("connection is successful")
}).catch((e)=>{
    console.log("no connection")
    console.log(e);
})