let express = require("express")
let addProjectRouter = express.Router()
let addProjectController = require("../controllers/addProject")

addProjectRouter.post("/api/v1/project-data/add", addProjectController.add)

module.exports = addProjectRouter