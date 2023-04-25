import express, { Request, Response, NextFunction } from 'express'

interface ErrorCheckIntrerface {
    result : String
    message : String
    errorMessage(res: Boolean) : String
}

class SchemChecker implements ErrorCheckIntrerface {
    result: String
    message: String

    constructor(scheme: String) {
        console.log("scheme : ", scheme)
        const res :boolean = (scheme === "https:") || scheme.startsWith('https://')
        this.result = res ? 'success' : 'fail'
        this.message = this.errorMessage(res)
    }

    errorMessage(res: Boolean): String {
        return res ? "valid" : "not valid"
    }
    
}

class HostChecker implements ErrorCheckIntrerface {
    result: String
    message: String

    constructor(host: String) {
        console.log("host : ", host)
        const res :boolean = host.length > 0
        this.result = res ? 'success' : 'fail'
        this.message = this.errorMessage(res)
    }

    errorMessage(res: Boolean): String {
        return res ? "valid" : "not valid"
    }
    
}

class PathChecker implements ErrorCheckIntrerface {
    result: String
    message: String

    constructor(path: String) {
        console.log("path : ", path)
        const res :boolean = path.length > 0
        this.result = res ? 'success' : 'fail'
        this.message = this.errorMessage(res)
    }

    errorMessage(res: Boolean): String {
        return res ? "valid" : "not valid"
    }
    
}

class QueryChecker implements ErrorCheckIntrerface {
    result: String
    message: String

    constructor(query: URLSearchParams) {
        console.log("query : ", query.toString())
        query.forEach((value, key) => {
            console.log(value, key)
        })
        const res :boolean = true
        this.result = res ? 'success' : 'fail'
        this.message = this.errorMessage(res)
    }

    errorMessage(res: Boolean): String {
        return res ? "valid" : "not valid"
    }
    
}

const parse = {
    link : function(req : Request, res: Response) {
        console.log("scheme = ", req.query.scheme)
        console.log("host = ", req.query.host)
        console.log("path = ", req.query.path)
        console.log("query = ", req.query.query)
        const url = new URL(req.query.url as string)
        const scheme_check : ErrorCheckIntrerface = new SchemChecker(url.protocol)
        const host_check : ErrorCheckIntrerface = new HostChecker(url.host)
        const path_check : ErrorCheckIntrerface = new PathChecker(url.pathname)
        const query_check : ErrorCheckIntrerface = new QueryChecker(url.searchParams)

        res.json({
            url: url.toString(),
            schemeCheck: scheme_check,
            hostCheck : host_check,
            pathCheck: path_check,
            queryCheck: query_check
        })  
    }
}

module.exports = parse