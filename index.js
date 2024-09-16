import express from 'express'
import router from './view/route.js'

const app = express()
app.use(router)
app.listent(8000, () => {
    console.log('server connected at port 8000 ')
})