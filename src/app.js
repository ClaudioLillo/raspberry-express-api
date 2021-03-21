import express, {json} from 'express'
import multer from 'multer'
import morgan from 'morgan'
import cors from 'cors'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname)
    }
  })
   
const upload = multer({ storage: storage })
   


const app = express()
app.use(cors())
app.use(json())
app.use(morgan('combined'))

app.use('/uploads', express.static('uploads'))

app.get('/', (req, res)=>{
    return res.status(200).json({
        author: "Claudio Lillo",
        version: "1.0"
    })
})
app.post('/upload', upload.array('file',5), (req, res, next)=>{
    const files = req.files
    if(!files){
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
    }
    let paths = []
    for(let i of files){
        paths.push(i.path)
    }
    return res.status(200).json({paths: paths})
})

export default app