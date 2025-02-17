const dummy = (blogs) => {
    return blogs.length === 0 ? 1 : 1
}

const totalLikes = (listOfBlogs) => {
    const result = 8
    let sum = 0
    const reducer = (sum, item) => {
        return sum + item
    }

    listOfBlogs.forEach(list => {
        sum += list.likes
    })
    return sum
}

module.exports = {
    dummy,
    totalLikes,
}