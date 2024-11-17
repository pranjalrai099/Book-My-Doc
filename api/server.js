import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import UserRouter from './routes/UserRoute.js'
const app=express()
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()
// middleware
app.use(express.json())
app.use(cors())
//api end point
 app.use('/apiback/admin',adminRouter)
 app.use('/apiback/doctor',doctorRouter)
 app.use('/apiback/user',UserRouter)
app.get('/',(req,res)=>{
    res.send('API Working GREAT 23')
})



app.listen(port,()=> console.log('Server started',port))