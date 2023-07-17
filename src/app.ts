import express from 'express'
import { createRequire  } from 'module'
import { fileURLToPath } from 'url'
import path from 'path';
const __dirname = fileURLToPath(new URL(".", import.meta.url)); 
const require = createRequire(import.meta.url)

import swaggerUi from 'swagger-ui-express'
const swaggerFile = require('./swagger_output.json')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname+"/public"))
// console.log(__dirname)
//라우팅 모듈 선언
import { indexRouter } from './routes/index'
app.use('/', indexRouter)

import { apiRouter } from './routes/api/api'
app.use('/api', apiRouter)

app.listen(12345, () => {
    console.log('Server running')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))