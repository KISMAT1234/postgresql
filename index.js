import express from 'express'

const app = express()
app.listent(8000, () => {
    console.log('server connected at port 8000 ')
})