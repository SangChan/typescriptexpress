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

const parse = {
    link : function(req : Request, res: Response) {
        interface ErrorCheckIntrerface {
            result : String
            message : String
            errorMessage() : String
        }

        class ErrorCheckType implements ErrorCheckIntrerface {
            result : String
            message : String

            constructor(result: Boolean) {
                this.result = result ? `success` : `fail`
                this.message = this.errorMessage()
            }

            errorMessage() {
                return "valid"
            }
        }


        const url = new URL(req.query.url as string)
        console.log("protocol: ",url.protocol)
        console.log("hostname: ",url.hostname)
        console.log("path:",url.pathname)
        console.log("query:",url.search)
        console.log("query:",url.searchParams.keys())
        const scheme_check : ErrorCheckType = new ErrorCheckType((url.protocol === "https:") || url.toString().startsWith('https://'))
        const path_check : ErrorCheckType = new ErrorCheckType(url.pathname.length > 1)
        const query_check : ErrorCheckType = new ErrorCheckType(true)

        res.json({
            url: url.toString(),
            schemeCheck: scheme_check,
            pathCheck: path_check,
            queryCheck: query_check
        })  
    }
}

module.exports = parse