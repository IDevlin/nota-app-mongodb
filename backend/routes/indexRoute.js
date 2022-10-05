import express from 'express'
import data from '../database.js'

const indexRouter = express.Router()

indexRouter.get('/',(req, res)=> {
 res.send(data.numericalArray)
})

export default indexRouter