let asyncHandler = require("express-async-handler")
let AddProject = require("../models/AddProject")

let addProjectController = {
    //! add
    add: asyncHandler(async (req, res)=>{
        let {project_name, work, rateperSq, targetarea, expectedbilling, totalexpense, estimatedprofit , dcsMason , contractMason , dcsHelper , contractHelper , dcsCarpenter , contractCarpenter , dcsLabour , contractLabour} = req.body
        let result = await AddProject.create({
            project_name: project_name,
            work: work,
            rateperSq: rateperSq,
            targetarea: targetarea,
            expectedbilling: expectedbilling,
            totalexpense: totalexpense,
            estimatedprofit: estimatedprofit,
            dcsMason: dcsMason,
            contractMason: contractMason,
            dcsHelper: dcsHelper,
            contractHelper: contractHelper,
            dcsCarpenter: dcsCarpenter,
            contractCarpenter: contractCarpenter,
            dcsLabour: dcsLabour,
            contractLabour: contractLabour
        })
        res.json({
            "message":"Project added successfully."
        })
    })
}

module.exports = addProjectController