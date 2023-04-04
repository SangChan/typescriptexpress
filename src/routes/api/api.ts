import express from 'express'

const router = express.Router()
const parse = require('./parse')

router.get('/', (req, res, next) => {
    res.send('[route] api index')
})

router.get("/parseLink", (req, res) => {
    parse.link(req, res)
})

module.exports = router