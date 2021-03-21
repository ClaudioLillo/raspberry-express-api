import express, {json} from 'express'

const app = express()
app.use(json())

app.get('/', (req, res)=>{
    return res.status(200).json({
        author: "Claudio Lillo",
        version: "1.0"
    })
})

export default app