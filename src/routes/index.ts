import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path';
import pug from 'pug'
const __dirname = fileURLToPath(new URL(".", import.meta.url)); 

export const indexRouter = express()
const __viewsName = path.join(__dirname, '..', 'views')
indexRouter.set('views', __viewsName)
indexRouter.set('view engine', 'pug')

indexRouter.get('', (req, res) => {
    res.sendFile(path.join(__viewsName, 'index.html'))
})

indexRouter.get('/about',(req, res) => {
    res.sendFile(path.join(__viewsName, 'about.html'))
})

indexRouter.get('/pug', (req, res) => {
    res.render('template.pug', {title: 'PUG : EXPRESS TEMPLATE ENGINE'})
})

const tempPugFile = path.join(__viewsName, 'temp.pug')
const compiledFunction = pug.compileFile(tempPugFile)

console.log(compiledFunction({
    name: 'Timothy'
}))

console.log(compiledFunction({
    name: 'Forbes'
}))

console.log(pug.renderFile(tempPugFile, {
    name: 'Timothy'
}))