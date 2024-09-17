import express from 'express'
import router from './view/route.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors)
app.use(router)
app.listent(8000, () => {
    console.log('server connected at port 8000 ')
})