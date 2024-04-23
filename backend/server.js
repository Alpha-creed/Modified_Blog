const express=require('express')
const app=express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors = require('cors')
const multer=require('multer')
const path=require("path")
const cookieParser=require('cookie-parser')
const authRoute =require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute = require('./routes/posts')
const commentRoute=require('./routes/comments')

dotenv.config()

//database
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database is conneted successfully")
    } catch (error) {
        console.log(error)
    }
}

//middlewares
app.use(express.json())
app.use('/images',express.static(path.join(__dirname,'/images')))
app.use(cors({origin:"http://localhost:3000",credentails:true}))
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)

//images upload
//TODO Willl changeiamge from staic to using cloudinary
const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
    }
})

const upload = multer({storage:storage})
app.post("/api/upload",upload.single('file'),(req,res)=>{
    res.status(200).json("Image has been uploaded succcessfully!")
})

app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("App is running on port "+process.env.PORT);
})