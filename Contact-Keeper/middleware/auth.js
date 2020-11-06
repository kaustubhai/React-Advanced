const config = require('config')
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token')

    if (!token)
        return res.status(401).json({ msg: "Unathorised Access" })
    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"))

        req.user = decoded.user
        next()
    }
    catch (e) {
        console.log(e)
        res.status(500).json({ msg: "Token is not Valid"})
    }
}