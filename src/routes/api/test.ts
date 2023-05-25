import express, { Request, Response, NextFunction } from 'express'

const test = {
    root : function(req : Request, res: Response) {
        const url = require('url');

        const urlString = 'https://www.example.com/path/to/resource?key1=value1&key2=value2#section1';

        const parsedUrl = new URL(urlString);

        const protocol = parsedUrl.protocol; // "https:"
        const host = parsedUrl.host; // "www.example.com"
        const hostname = parsedUrl.hostname; // "www.example.com"
        const port = parsedUrl.port; // "" (if not specified in the URL)
        const path = parsedUrl.pathname; // "/path/to/resource"
        const search = parsedUrl.search; // "?key1=value1&key2=value2"
        const hash = parsedUrl.hash; // "#section1"
        console.log("search:", search)
        
        res.json({
            result: "[test::root]success"
        })
    },
    example : function(req : Request, res: Response) { 
        const url = require('url');
        const urlString = req.query.url as string; // assuming the URL parameter is passed as a query parameter
        const parsedUrl = new URL(urlString); // parse the URL using the built-in URL constructor
        const scheme = parsedUrl.protocol; // get the scheme (http or https)
        const host = parsedUrl.host; // get the host (including the port if specified)
        const path = parsedUrl.pathname; // get the path (including the leading slash)
        const query = parsedUrl.search; // get the query string (including the leading question mark)
    
        console.log('Scheme:', scheme);
        console.log('Host:', host);
        console.log('Path:', path);
        console.log('Query:', query);
    
        res.json({
            result: "[test::example]success"
        })
    }
}

module.exports = test