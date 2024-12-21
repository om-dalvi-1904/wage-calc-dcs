let express = require("express")
let employeeRouter = express.Router()
let employeeController = require("../controllers/employeeCtrl")

employeeRouter.post("/api/v1/employee/add", employeeController.add)

employeeRouter.get("/api/v1/employee/get", employeeController.get)

module.exports = employeeRouter