const dummy = (blogs) => {
    return blogs.length === 0 ? 1 : 1
}

const totalLikes = (listOfBlogs) => {
    const result = 8
    let sum = 0

    listOfBlogs.forEach(list => {
        sum += list.likes
    })
    return sum
}

const favoriteBlog = (listOfBlogs) => {
    const mostLikedBlog = listOfBlogs.reduce((max, blog) => (blog.likes > max.likes ? blog : max), listOfBlogs[0])

    return listOfBlogs.length === 0 ? null : {
        title: mostLikedBlog.title,
        author: mostLikedBlog.author,
        likes: mostLikedBlog.likes
     }
}

const mostBlogs = (blogs) => {
    const author = blogs.reduce((acc, blog) => {
        acc[blog.author] = (acc[blog.author] || 0 ) + 1
        return acc
    }, {})

    const maxAuthor = Object.keys(author).reduce((a, b) =>
        author[a] > author[b] ? a : b
    );
    
    return { author: maxAuthor, blogs: author[maxAuthor] };
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
}