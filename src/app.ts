import express from 'express'

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//라우팅 모듈 선언
const indexRouter = require('./routes/index')
app.use('/', indexRouter)

const apiRouter = require('./routes/api/api')
app.use('/api', apiRouter)

app.listen(12345, () => {
    console.log('Server running')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))