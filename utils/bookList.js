import BookCreator from "./book.js";
import { fakerEN, fakerRU, fakerJA } from "@faker-js/faker"

class BookListCreator {
    constructor({ language = 'en', seed = 1, likesCount = 5, reviewsCount = 3, limits = 10, startedId = 1 } = {}) {
        this.language = language
        this.seed = seed
        this.likesCount = likesCount
        this.reviewsCount = reviewsCount,
            this.limits = limits
        this.startedId = startedId
    }

    createFakerWithLangueage(id) {
        const key = this.language
        const fakers = {
            en: {
                fakerId: 111111,
                faker: fakerEN
            },
            ru: {
                fakerId: 222222,
                faker: fakerRU,
            },
            ja: {
                fakerId: 333333,
                faker: fakerJA,
            }
        }
        const { faker, fakerId } = fakers[key]
        faker.seed(this.seed + id + fakerId)
        return faker
    }

    get books() {
        let books = []

        for (let i = 0; i < this.limits; i++) {
            const id = this.startedId + i
            const faker = this.createFakerWithLangueage(id)
            const book = new BookCreator({ id: id, faker: faker, likesCount: this.likesCount, reviewsCount: this.reviewsCount })
            books.push(book.book)
        }

        return books
    }
}

export default BookListCreator