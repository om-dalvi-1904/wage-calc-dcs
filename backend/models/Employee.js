let mongoose = require("mongoose")

let employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Employee", employeeSchema)