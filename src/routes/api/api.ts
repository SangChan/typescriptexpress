import express from 'express'

const router = express.Router()
const parse = require('./parse')
const test = require('./test')

router.post('/example', (req, res) => {
    test.example(req, res)
})

router.post("/parse", (req, res) => {
    parse.link(req, res)
})

module.exports = router