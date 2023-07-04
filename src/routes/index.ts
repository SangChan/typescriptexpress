import express from 'express'
import path from 'path';
const __dirname = path.resolve();

const router = express()
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