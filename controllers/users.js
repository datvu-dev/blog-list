const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response, next) => {
    try {
        const body = request.body
        const username = body.username.trim()
        const name = body.name.trim()
        const password = body.password.trim()

        if (username === undefined || username === '') {
            return response.status(400).json({ error: 'username missing' })
        }

        if (name === undefined || name === '') {
            return response.status(400).json({ error: 'name missing' })
        }

        if (password === undefined || password === '') {
            return response.status(400).json({ error: 'password missing' })
        }

        if (username.length < 3) {
            return response.status(400).json({ error: 'username must be at least 3 characters long' })
        }

        if (name.length < 3) {
            return response.status(400).json({ error: 'name must be at least 3 characters long' })
        }

        if (password.length < 3) {
            return response.status(400).json({ error: 'password must be at least 3 characters long' })
        }

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)

        const user = new User({
            username: username,
            name: name,
            passwordHash,
        })

        const savedUser = await user.save()

        response.json(savedUser)
    } catch (exception) {
        next(exception)
    }
})

usersRouter.get('/', async (request, response) => {
    const users = await User
        .find({}).populate('blogs')

    response.json(users.map(u => u.toJSON()))
})

module.exports = usersRouter