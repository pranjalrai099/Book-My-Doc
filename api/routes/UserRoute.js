import express from 'express'
import { registerUser,loginUser, getProfile,updateUser, BookAppointment, listappointment, cancelAppointment, paymentRazorpay, verifyRazorpay } from '../controllers/UserController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'
const UserRouter=express.Router()
UserRouter.post('/register',registerUser)
UserRouter.post('/login',loginUser)
UserRouter.get('/get-profile',authUser,getProfile)
UserRouter.post('/update-profile',upload.single('image'),authUser,updateUser)
UserRouter.post('/book-appointment',authUser,BookAppointment)
UserRouter.get('/appointment',authUser,listappointment)
UserRouter.post('/cancel-appointment',authUser,cancelAppointment)
UserRouter.post('/payment-razorpay',authUser,paymentRazorpay)
UserRouter.post('/verify-razorpay',authUser,verifyRazorpay)
export default UserRouter