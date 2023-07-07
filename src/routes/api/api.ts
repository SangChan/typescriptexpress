import express from 'express'

export const apiRouter = express.Router()
import { parse } from './parse'

apiRouter.post("/parse", (req, res) => {
    parse.link(req, res)
})