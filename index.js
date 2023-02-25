const express= require('express')
const connectDb= require('./config/config')
const redirect= require('./routes/redirect')
const url= require('./routes/url')
const app= express();

app.use(express.json({
    extended: false
}))


// path: GET /:code
app.use('/',redirect)

// path: POST /url/shorten
app.use('/url',url)


const port= 8000;

connectDb()
.then(()=>{
app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`)
})
});