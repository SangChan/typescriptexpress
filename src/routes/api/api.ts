import express from 'express'

const router = express.Router()
const parse = require('./parse')
const parse2 = require('./parse2')

router.post('/example', (req, res) => {
    parse2.example(req, res)
})

router.post("/parse", (req, res) => {
    parse.link(req, res)
})

module.exports = router