import express from 'express'

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('.././swagger_output.json')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get('/', (req, res, next) => {
    res.send('Hello')
})

app.get("/api/parseLink", (req, res) => {
    interface ErrorCheckType {
        result : String
        message : String
    }
    const url = new URL(req.query.url as string)
    console.log("protocol: ",url.protocol)
    console.log("hostname: ",url.hostname)
    const scheme_check : ErrorCheckType = {
        result : success((url.protocol === "https:") || url.toString().startsWith('https://')),
        message : "valid"
    }

    const path_check : ErrorCheckType = {
        result : success(true),
        message : "valid"
    }

    const query_check : ErrorCheckType = {
        result : success(true),
        message : "valid"
    }

    res.json({
        url: url.toString(),
        schemeCheck: scheme_check,
        pathCheck: path_check,
        queryCheck: query_check
    })
})

function success(value: Boolean) {
    return value ? "success" : "fail"
}

app.listen(12345, () => {
    console.log('Server running')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))