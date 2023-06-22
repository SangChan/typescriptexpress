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
    code: Number
    result: String
    message: String

    constructor(scheme: String) {
        console.log("scheme : ", scheme)
        const res :boolean = (scheme === "https:") || scheme.startsWith('https://')
        this.code = res ? 0 : -1
        this.result = res ? 'success' : 'fail'
        this.message = this.errorMessage(this.code)
    }

    errorMessage(code: Number): String {
        return code == 0 ? "valid" : "not valid"
    }
    
}

class HostChecker implements ErrorCheckIntrerface {
    code: Number
    result: String
    message: String

    constructor(host: String) {
        console.log("host : ", host)
        const res :boolean = host.length > 0
        this.code = res ? 0 : -1
        this.result = res ? 'success' : 'fail'
        this.message = this.errorMessage(this.code)
    }

    errorMessage(code: Number): String {
        return code ? "valid" : "not valid"
    }
    
}

class PathChecker implements ErrorCheckIntrerface {
    code: Number
    result: String
    message: String

    constructor(path: String) {
        console.log("path : ", path)
        const res :boolean = path.length > 0
        this.code = res ? 0 : -1
        this.result = res ? 'success' : 'fail'
        this.message = this.errorMessage(this.code)
    }

    errorMessage(code: Number): String {
        return code == 0 ? "valid" : "not valid"
    }
    
}

class QueryChecker implements ErrorCheckIntrerface {
    code: Number
    result: String
    message: String

    constructor(query: URLSearchParams) {
        console.log("query : ", query.toString())
        query.forEach((value, key) => {
            console.log(value, key)
        })
        const res :boolean = true
        this.code = res ? 0 : -1
        this.result = res ? 'success' : 'fail'
        this.message = this.errorMessage(this.code)
    }

    errorMessage(code: Number): String {
        return code == 0 ? "valid" : "not valid"
    }
    
}

module.exports = parse