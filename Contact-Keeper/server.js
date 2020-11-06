const express = require('express')

const server = express()

server.get('/', (req, res) => res.json({ "hello": "Server is now live"}))

server.use('/api/users', require('./routes/user'))
server.use('/api/auth', require('./routes/auth'))
server.use('/api/contacts', require('./routes/contact'))

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log('Server is live on', PORT))