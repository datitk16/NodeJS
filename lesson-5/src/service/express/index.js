// express trả về một đối tượng express (app)
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'



import cors from 'cors'
export default (apiRoot,router) => {
    const app = new express()
    app.use(cors())
    app.use(compression())
    app.use(morgan('dev'))
    app.use(apiRoot,router)
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    const wwwRoot = path.join(__dirname, '../../../www')
    app.use(express.static(wwwRoot))
    app.get('/*', (req, res) => {
        res.sendFile(path.join(wwwRoot, 'index.html'))

    })
    return app
}

