import express from 'express'

const router = express.Router()

router.get("/parseLink", (req, res) => {
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

module.exports = router