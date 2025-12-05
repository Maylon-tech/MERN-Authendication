import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'


dotenv.config()
const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// What is this ?????
app.use(cookieParser())

const port = process.env.PORT || 5000

app.use("/api/users", userRoutes)
// What is this ?????
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log("Server started on port", port))

// POST / api / users - Register a User
// POST /api/users/auth  - Authenticate a user and get token
// POST /api/users/logout  - Logout user and clear cookie
// GET  /api/users/profile  - Get user Profile
// PUT  /api/users/profile  - Update profile


// XIM7bAqWfvvUrZHg