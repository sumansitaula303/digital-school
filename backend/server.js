import express from 'express';
import cors from "cors"
import { connectDB } from './config/db.js';
import homeworkRouter from './routes/homeworkRoute.js';
import bodyParser from 'body-parser';
import adminRouter from './routes/adminRouter.js';
//app config
const app= express();
const port= 5050

//middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

//DB connection
connectDB();

//Real endpoints
app.use("/api/admins", adminRouter)


//api endpoints
app.use("/api/homework", homeworkRouter)

app.get("/", (req, res)=>{
    res.send("API is working")
})
app.get("/about", (req, res)=>{
    res.send(
        {
            name: 'Suman Sitaula',
            contact: "9817079212"
        }
    )
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
//mongodb+srv://sitaulasuman303:gGl90oDn7huhRBrw@cluster0.7wje4yb.mongodb.net/?