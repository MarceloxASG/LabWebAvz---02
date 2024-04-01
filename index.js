const express=require('express')
const app = express()
const routes=require('./rutas.js')
const port = 3000

app.use(express.static(path.join(__dirname, 'static')));


app.use(routes)

app.listen(port,()=> {
    console.log('Server on port ${3000}')
})
    