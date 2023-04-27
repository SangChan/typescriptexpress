import express from 'express'

const router = express.Router()
const parse = require('./parse')

router.get('/', (req, res, next) => {
    res.send('[route] api index')
})

router.get("/parseLink", (req, res) => {
    parse.link(req, res)
})


router.get('/example', (req, res) => {
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
  
    res.send('Example GET request');
  });

module.exports = router