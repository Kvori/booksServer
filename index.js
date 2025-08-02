import cors from "cors"
import express from "express"
import router from "./routes/index.js"
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware.js"

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", router)

app.use(errorHandlingMiddleware)

const start = () => {
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
}

start()