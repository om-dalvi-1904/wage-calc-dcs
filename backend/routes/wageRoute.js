let express = require("express")
let wageRouter = express.Router()
let wageController = require("../controllers/wageCtrl")

wageRouter.post("/api/v1/wage/add", wageController.add)

wageRouter.get("/api/v1/wage/get", wageController.view)

module.exports = wageRouter