import app from './src/app'

const port = process.env.PORT || 3001
app.listen(port, ()=>{
    console.log("Listening on port: ", port)
    console.log(__dirname)
})