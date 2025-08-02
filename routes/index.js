import { Router } from "express";
import { booksRouter } from "./booksRouter.js";

const router = new Router()

router.use("/books", booksRouter)

export default router