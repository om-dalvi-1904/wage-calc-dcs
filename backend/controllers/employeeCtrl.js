let asyncHandler = require("express-async-handler")
let Employee = require("../models/Employee")

let employeeController = {
    //! add
    add: asyncHandler(async (req, res)=>{
        let {name, designation} = req.body
        let result = await Employee.create({
            name: name,
            designation: designation
        })
        res.json({
            message:"Employee created successfully."
        })
    }),
    //! get all employees
    get: asyncHandler(async (req, res)=>{
        let result = await Employee.find()
        res.json(result)
    })
}

module.exports = employeeController