import express from "express"
import dotenv from "dotenv"
import path from "path"
import dummyRouter from "./routes/dummt.routes"
dotenv.config()

// create the server route
const app = express()

// middleware
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))

//routes
app.use(express.static(path.join(__dirname, "public")))
app.use("/",dummyRouter)

const PORT = process.env.PORT || 3500

app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`)
})