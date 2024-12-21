let express = require("express")
let projectRouter = express.Router()
let projectController = require("../controllers/projectCtrl")

projectRouter.post("/api/v1/project/add", projectController.add)

projectRouter.get("/api/v1/project/view", projectController.view)

module.exports = projectRouter