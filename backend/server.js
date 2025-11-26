import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
dotenv.config()

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Server is ready to serve Sir..")
})

app.use("/api/users", userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log("Server started on port", port))


// POST / api / users - Register a User
// POST /api/users/auth  - Authenticate a user and get token
// POST /api/users/logout  - Logout user and clear cookie
// GET  /api/users/profile  - Get user Profile
// PUT  /api/users/profile  - Update profile