import BookListCreator from "../utils/bookList.js"

class BookController {
    async getBooks(req, res, next) {
        const {
            page,
            language,
            seed,
            likesCount,
            reviewsCount
        } = req.query

        let startedId = 1
        let limits = 20

        if (page && Number(page) !== 1) {
            limits = 10
            startedId = 21 + (page - 2) * limits
        }

        const { books } = new BookListCreator({language, seed, likesCount, reviewsCount, limits, startedId})
        res.json({books, hasMore: true})
    }

}

export const bookController = new BookController()