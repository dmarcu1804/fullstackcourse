require('dotenv').config()

const mongoUrl = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGODB_URL : process.env.MONGODB_URL
const PORT = process.env.PORT

module.exports = {
    mongoUrl,
    PORT
}