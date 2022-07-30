const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./DB/connection.js')
const userRouter = require('./router/userRouter.js')

const App = express()
App.use(express.json())

dotenv.config({path:"config/config.env"})


App.use('/api/users/auth',userRouter)

// handling errors;
App.use((err,req,res,next)=>{
    const status = err.status||500;
    const message = err.message || "some internal error";
    return res.status(status).json({
        success:false,
        status,
        message
    })
})



connectDB()
App.listen(process.env.PORT,()=>{
    console.log('connected  to port - '+process.env.PORT)
})