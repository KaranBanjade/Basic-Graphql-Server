const express = require("express")
const router = new express.Router()
const Student = require("../models/students")

// defining router
router.get("/Karan",(req,res)=>{
    res.send("Hello from router")
})

// create a new student
router.post('/students',async(req,res)=>{
    
    try{
        console.log(req.body)
        // const {name,email,phone,address} = req.body
        // console.log(name,email,phone,address)
        const user = new Student(req.body)
        const createUser = await user.save()
        res.send(createUser)
    }
    catch(e){
        res.send(e)
    }      
})
// reading data of all Students
router.get("/students",async(req,res)=>{
    try{
        const studentData = await Student.find()
        res.send(studentData)
    }catch(e){
        res.send(e)
    }
})

router.get("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const studentData = await Student.findById(_id)
        if(!studentData){
            return res.status(404).send()
        }
        else{
            res.send(studentData)
        }

    }catch(e){
        res.status(500).send(e)
    }
})

router.delete("/students/:type/:name",async(req,res)=>{
    try {
        let name = req.params.name
        let type = req.params.type
        const studentData = await Student.find()
        console.log(studentData)
        let dataArray = []
        for(data of studentData){
            if(data[`${type}`]==name){
            const studentDelete = await Student.findByIdAndDelete(data.id )
            if(!data.id)
                return res.status(500).send();
            }
        }
        res.send(dataArray)
    } catch(e){
        res.status(500).send(e)
    }
})

// Update using ID
router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body,{
            new:true
        })
        res.send(updateStudent)
    }catch(e){
        res.status.status(500).send(e)
    }
})


// Delete by id
router.delete("/students/delete/:id",async(req,res)=>{
    try {  
         const studentDelete = await Student.findByIdAndDelete(req.params.id )
         if(!req.params.id){
             return res.status(500).send();
         }
         res.send(studentDelete)
    } catch (error) {
        res.status.status(500).send(error)
    }
})


// router.post("/students/",async(req,res)=>{
//     try{
//         const user = new Student(req.body)
//         const createUser = await user.save()
//         console.log(createUser)
//         res.send(createUser)
//     }
//     catch(e){
//         res.send(e)
//     }      
// })
module.exports = router