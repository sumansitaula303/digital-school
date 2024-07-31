import express from 'express';
import cors from "cors"

//app config
const app= express();
const port= 5050

//middleware
app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.send("API is working")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})