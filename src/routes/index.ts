import express from 'express'

const path = require('path')
const router = express.Router()
const __viewsName = path.join(__dirname, '..', 'views')

router.get('', (req, res) => {
    res.sendFile(path.join(__viewsName, 'index.html'))
})

router.get('/about',(req, res) => {
    res.sendFile(path.join(__viewsName, 'about.html'))
})

module.exports = router