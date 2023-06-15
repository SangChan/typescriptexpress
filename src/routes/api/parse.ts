import express, { Request, Response, NextFunction } from 'express'
import { ErrorCheckIntrerface } from './interface/error_interface'

const parse = {
    link : function(req : Request, res: Response) {
        const url = new URL(req.query.url as string)
        const schemeCheck : ErrorCheckIntrerface = new SchemChecker(url.protocol)
        const hostCheck : ErrorCheckIntrerface = new HostChecker(url.host)
        const pathCheck : ErrorCheckIntrerface = new PathChecker(url.pathname)
        const queryCheck : ErrorCheckIntrerface = new QueryChecker(url.searchParams)

        res.json({
            url: url.toString(),
            schemeCheck: schemeCheck,
            hostCheck : hostCheck,
            pathCheck: pathCheck,
            queryCheck: queryCheck
        })  
    }
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

module.exports = parse