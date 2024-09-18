import express from 'express'
import router from './view/route.js'
import cors from 'cors'
import Connection from './db.js'

const app = express()
Connection()
app.use(express.json())
app.use(cors)
app.use(router)
app.listent(8000, () => {
    console.log('server connected at port 8000 ')
})