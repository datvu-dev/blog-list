const dummy = (blogs) => {
    console.log(blogs)
    return 1
}

const totalLikes = (blogs) => {
    const likesArray = blogs.map(blog => blog.likes)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return blogs.length ? likesArray.reduce(reducer) : 0
}

const favoriteBlog = (blogs) => {
    const likesArray = blogs.map(blog => blog.likes)
    const i = likesArray.indexOf(Math.max(...likesArray))

    blogObj = {
        title: blogs[i].title,
        author: blogs[i].author,
        likes: blogs[i].likes
    }

    return blogObj
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}