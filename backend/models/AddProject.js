let mongoose = require("mongoose")

let addprojectSchema = new mongoose.Schema(
    {
        project_name:{
            type: String,
            required: true
        },
        work:{
            type:String,
            required: true
        },
        rateperSq:{
            type: Number,
            required: true
        },
        targetarea:{
            type: Number,
            required: true
        },
        expectedbilling:{
            type: Number,
            required: true
        },
        dcsmason:{
            type: Number,
        },
        contractmason:{
            type: Number,
        },
        dcshelper:{
            type: Number,
        },
        contracthelper:{
            type: Number,
        },
        dcscarpenter:{
            type: Number,
        },
        contractcarpenter:{
            type: Number,
        },
        dcslabour:{
            type: Number,
        },
        contractlabour:{
            type: Number,
        },
        date: {
            type: Date,
            default: Date.now
        },
        totalexpense:{
            type: Number,
        },
        estimatedprofit:{
            type: Number
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("AddProject", addprojectSchema)