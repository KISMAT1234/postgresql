import express from 'express'
import router from './view/route.js'
import cors from 'cors'
import sequelize from './db.js'

const app = express()
sequelize.authenticate().then(() => {
    app.listen(8000, () => {
        console.log('server connected at port 8000 ')
    })
}).catch((err) => {
    console.log(err,'error in s')
})
app.use(express.json())
app.use(cors)
app.use(router)