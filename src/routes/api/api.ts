import express from 'express'

const router = express.Router()
const parse = require('./parse')
const parse2 = require('./parseExperiments')

router.post('/test2', (req, res) => {
    parse2.test2(req, res)
})

router.post('/test1', (req, res) => {
    parse2.test1(req, res)
})

router.post("/parse", (req, res) => {
    parse.link(req, res)
})

module.exports = router