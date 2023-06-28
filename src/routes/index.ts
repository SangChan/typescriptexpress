import express from 'express'

const router = express.Router()

router.get('', (req, res) => {
    res.send('<h1> I am Iron Man</h1>')
})

router.get('/about',(req, res) => {
    res.send('<h1>This is about page</h1>')
})

module.exports = router