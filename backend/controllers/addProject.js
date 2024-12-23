let asyncHandler = require("express-async-handler")
let AddProject = require("../models/AddProject")

let addProjectController = {
    //! add
    add: asyncHandler(async (req, res)=>{
        let { Project, Work, RatePerSqFt, TargetArea, DCS_Mason, Contract_Mason, Contract_Mason_Rate, DCS_Helper, Contract_Helper, Contract_Helper_Rate, DCS_Carpenter, Contract_Carpenter, Contract_Carpenter_Rate, DCS_Labour, Contract_Labour, Contract_Labour_Rate, Expected_Billing, Employee_Expenses} = req.body
        let result = await AddProject.create({
            ProjectName: Project,
            Work: Work,
            RatePerSqFt : RatePerSqFt,
            TargetArea: TargetArea,
            DCS_Mason: DCS_Mason,
            Contract_Mason: Contract_Mason,
            Contract_Mason_Rate: Contract_Mason_Rate,
            DCS_Helper: DCS_Helper,
            Contract_Helper: Contract_Helper,
            Contract_Helper_Rate: Contract_Helper_Rate,
            DCS_Carpenter: DCS_Carpenter,
            Contract_Carpenter: Contract_Carpenter,
            Contract_Carpenter_Rate: Contract_Carpenter_Rate,
            DCS_Labour: DCS_Labour,
            Contract_Labour: Contract_Labour,
            Contract_Labour_Rate: Contract_Labour_Rate,
            Expected_Billing: Expected_Billing,
            Employee_Expenses: Employee_Expenses,
            Time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            Date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
        })
        res.json({
            "message":"Project added successfully."
        })
    })
}

module.exports = addProjectController