let asyncHandler = require("express-async-handler")
let Project = require("../models/Project")

let projectController = {
    //! add
    add: asyncHandler(async (req, res)=>{
        let {name, location} = req.body
        let result = await Project.create({
            name: name,
            location: location
        })
        res.json({
            message:"Project created successfully."
        })
    }),
    //! view 
    view: asyncHandler(async (req, res)=>{
        let result = await Project.find()
        res.json(result)
    })
}

module.exports = projectController