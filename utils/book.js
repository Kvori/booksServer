import { fakerEN, fakerRU, fakerJA } from "@faker-js/faker"

class BookCreator {
    constructor({ id, faker,likesCount, reviewsCount }) {
        this.id = id
        this.faker = faker
        this.likesCount = likesCount
        this.reviewsCount = reviewsCount
    }

    createReviews() {
        let reviews = []

        for (let i = 0; i < this.roundingNumberWithChance(Number(this.reviewsCount)); i++) {
            const rewiewAuthor = this.faker.person.fullName()
            const reviewText = this.faker.lorem.sentences({ min: 1, max: 3 })
            reviews.push({ author: rewiewAuthor, text: reviewText })
        }
        return reviews
    }

    roundingNumberWithChance(number) {
        if (number % 1 === 0) return number

        let roundeNumber
        const floorNumber = Math.floor(number)

        const chance = (number - floorNumber) * 100
        const randomNumber = this.faker.number.int({ min: 0, max: 100 })

        randomNumber < chance ? roundeNumber = floorNumber + 1 : roundeNumber = floorNumber
        return roundeNumber
    }

    createAuthors() {
        let authors = []

        const randomAmountAuthors = this.faker.number.int({ min: 1, max: 3 })
        for (let i = 0; i < randomAmountAuthors; i++) {
            authors.push(this.faker.book.author())
        }
        return authors
    }

    get book() {
        const id = this.id
        const isbn = this.faker.commerce.isbn()
        const title = this.faker.book.title()
        const author = this.createAuthors()
        const publisher = `${this.faker.book.publisher()}, ${String(this.faker.number.int({min:1900, max: 2025}))}`
        const likes = this.roundingNumberWithChance(Number(this.likesCount))
        const reviews = this.createReviews()
        const image = this.faker.image.urlPicsumPhotos()

        return {
            id,
            isbn,
            title,
            author,
            publisher,
            likes,
            reviews,
            image
        }
    }
}

export default BookCreator