const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const server = express()

connectDB()

server.use(express.json({ extended: false }))

server.use('/api/users', require('./routes/user'))
server.use('/api/auth', require('./routes/auth'))
server.use('/api/contacts', require('./routes/contact'))

// Serve Static Assets
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log('Server is live on', PORT))