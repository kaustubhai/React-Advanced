const express = require('express')
const connectDB = require('./config/db')

const server = express()

connectDB()

server.use(express.json({ extended: false }))

server.get('/', (req, res) => res.json({ "hello": "Server is now live"}))

server.use('/api/users', require('./routes/user'))
server.use('/api/auth', require('./routes/auth'))
server.use('/api/contacts', require('./routes/contact'))

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log('Server is live on', PORT))