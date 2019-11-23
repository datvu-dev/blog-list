const dummy = (blogs) => {
    console.log(blogs)
    return 1
}

const totalLikes = (blogs) => {
    const likesArray = blogs.map(blog => blog.likes)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return blogs.length ? likesArray.reduce(reducer) : 0
}

module.exports = {
    dummy,
    totalLikes
}