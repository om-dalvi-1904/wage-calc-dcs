let mongoose = require("mongoose")

let addprojectSchema = new mongoose.Schema(
    {
        ProjectName: { type: String },
        Work: { type: String },
        RatePerSqFt : { type: Number },
        TargetArea: { type: Number },
        DCS_Mason: { type: Number, default: 0 },
        Contract_Mason: { type: Number, default: 0 },
        Contract_Mason_Rate: { type: Number, default: 0  },
        DCS_Helper: { type: Number, default: 0 },
        Contract_Helper: { type: Number, default: 0 },
        Contract_Helper_Rate: { type: Number, default: 0 },
        DCS_Carpenter: { type: Number, default: 0 },
        Contract_Carpenter: { type: Number, default: 0 },
        Contract_Carpenter_Rate: { type: Number, default: 0 },
        DCS_Labour: { type: Number, default: 0 },
        Contract_Labour: { type: Number, default: 0 },
        Contract_Labour_Rate: { type: Number, default: 0 },
        Expected_Billing: { type: Number, default: 0 },
        Employee_Expenses: { type: Number, default: 0 },
        Time: { type: String, },
        Date: { type: String,  }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("AddProject", addprojectSchema)