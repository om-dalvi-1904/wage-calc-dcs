let mongoose = require("mongoose")

let wageSchema = new mongoose.Schema(
    {
        employee: {
            type: String,
            required: true
        },
        project: {
            type: String,
            required: true
        },
        work: {
            type: String,
            required: true
        },
        hours: {
            type: Number,
            required: true
        },
        wage: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Wage", wageSchema)