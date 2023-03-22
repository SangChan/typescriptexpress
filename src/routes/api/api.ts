import express from 'express'

const router = express.Router()
const parse = require('./parse')

router.get("/parseLink", (req, res) => {
    parse.link(req, res)
})

module.exports = router