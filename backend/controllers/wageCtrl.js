let asyncHandler = require("express-async-handler")
let Wage = require("../models/Wage")

let wageController = {
    //! add
    add: asyncHandler(async (req, res)=>{
        let {employee, project, work, hours, wage} = req.body
        let result = await Wage.create({
            employee: employee,
            project: project,
            work: work,
            hours: hours,
            wage: wage
        })
        res.json({
            message:"Wage assigned successfully."
        })
    }),
    //! view
    view: asyncHandler(async (req, res)=>{
        let result = await Wage.find()
        res.json(result)
    })
}

module.exports = wageController