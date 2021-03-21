import express, {json} from 'express'
import multer from 'multer'
import morgan from 'morgan'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  const upload = multer({ storage: storage })

const app = express()
app.use(json())
app.use(morgan('combined'))

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
    return res.status(200).json({files: files})
})

export default app