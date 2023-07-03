import express from 'express'

const router = express()
const path = require('path')
const __viewsName = path.join(__dirname, '..', 'views')
router.set('views', __viewsName)
router.set('view engine', 'pug')

router.get('', (req, res) => {
    res.sendFile(path.join(__viewsName, 'index.html'))
})

router.get('/about',(req, res) => {
    res.sendFile(path.join(__viewsName, 'about.html'))
})

router.get('/pug', (req, res) => {
    res.render('template.pug', {title: 'PUG : EXPRESS TEMPLATE ENGINE'})
})

module.exports = router