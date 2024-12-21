let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors")
const employeeRouter = require("./routes/employeeRoute")
const projectRouter = require("./routes/projectRoute")
const wageRouter = require("./routes/wageRoute")

let app = express()

//? cors options
// let corsOption={
//     origin:["https://reliable-horse-c12372.netlify.app/"],
//     methods:["GET", "POST"],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }

//? middlewares
app.use(express.json())
app.use(cors())

//? connect to database
mongoose
    .connect("mongodb+srv://omdalvi1904:MjppXhuCEA8bEOGx@firstdb.ldmseda.mongodb.net/employee-calculator")
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((e)=>{
        console.log(e);        
    })

//? routes
app.use("/", employeeRouter)
app.use("/", projectRouter)
app.use("/", wageRouter)

//? start the server
let port = 3000
app.listen(port,()=>{console.log("Server is live on port 3000.")})