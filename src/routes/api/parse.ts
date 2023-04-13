import express, { Request, Response, NextFunction } from 'express'

enum DataType {
    String = "String",
    Integer = "Integer",
    Date = "Date",
    Url = "Url",
}

namespace DataType {
    export function check(type: DataType): Boolean {
        if (type === DataType.String) {
            return true
        }
        return false
    }
}

interface ErrorCheckIntrerface {
    result : String
    message : String
    errorMessage() : String
}

class SchemChecker implements ErrorCheckIntrerface {
    result: String
    message: String

    constructor(scheme: String) {
        const res :boolean = (scheme === "https:") || scheme.startsWith('https://')
        this.result = res ? 'success' : 'fail'
        this.message = this.errorMessage()
    }

    errorMessage(): String {
        return "valid"
    }
    
}

class PathChecker implements ErrorCheckIntrerface {
    result: String
    message: String

    constructor(path: String) {
        const res :boolean = path.length > 0
        this.result = res ? 'success' : 'fail'
        this.message = this.errorMessage()
    }

    errorMessage(): String {
        return "valid"
    }
    
}

class QueryChecker implements ErrorCheckIntrerface {
    result: String
    message: String

    constructor(query: URLSearchParams) {
        const res :boolean = true
        this.result = res ? 'success' : 'fail'
        this.message = this.errorMessage()
    }

    errorMessage(): String {
        return "valid"
    }
    
}

const parse = {
    link : function(req : Request, res: Response) {
        const url = new URL(req.query.url as string)
        console.log("protocol: ",url.protocol)
        console.log("hostname: ",url.hostname)
        console.log("path:",url.pathname)
        console.log("query:",url.search)
        console.log("query:",url.searchParams.keys())
        const scheme_check : ErrorCheckIntrerface = new SchemChecker(url.protocol)
        const path_check : ErrorCheckIntrerface = new PathChecker(url.pathname)
        const query_check : ErrorCheckIntrerface = new QueryChecker(url.searchParams)

        res.json({
            url: url.toString(),
            schemeCheck: scheme_check,
            pathCheck: path_check,
            queryCheck: query_check
        })  
    }
}

module.exports = parse