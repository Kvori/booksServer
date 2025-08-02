import { Router } from "express";
import { bookController}  from "../controllers/bookController.js";

const booksRouter = new Router()

booksRouter.get("/data", bookController.getBooks)

export { booksRouter }