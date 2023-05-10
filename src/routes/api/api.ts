import express from 'express'

const router = express.Router()
const parse = require('./parse')
const test = require('./test')

router.post('/', (req, res) => {
    test.root(req, res)
})

router.post('/example', (req, res) => {
    test.example(req, res)
})

router.get("/parseLink", (req, res) => {
    parse.link(req, res)
})

module.exports = router