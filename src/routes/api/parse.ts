import express, { Request, Response, NextFunction } from 'express'
const parse = {
    link : function(req : Request, res: Response) {
        interface ErrorCheckType {
            result : String
            message : String
            errorMessage() : String
        }
        const url = new URL(req.query.url as string)
        console.log("protocol: ",url.protocol)
        console.log("hostname: ",url.hostname)
        console.log("path:",url.pathname)
        console.log("query:",url.search)
        console.log("query:",url.searchParams.keys())
        const scheme_check : ErrorCheckType = {
            result : success((url.protocol === "https:") || url.toString().startsWith('https://')),
            message : "valid",
            errorMessage() {
                "valid"
            }
        }

        const path_check : ErrorCheckType = {
            result : success(url.pathname.length > 1),
            message : "valid",
            errorMessage() {
                "valid"
            }
        }

        const query_check : ErrorCheckType = {
            result : success(true),
            message : "valid",
            errorMessage() {
                "valid"
            }
        }

        res.json({
            url: url.toString(),
            schemeCheck: scheme_check,
            pathCheck: path_check,
            queryCheck: query_check
        })  
    }
}

const success = (value: Boolean) =>  value ? `success` : `fail`

module.exports = parse