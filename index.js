const express = require('express')
const   mongoose  = require('mongoose')
const app = express()
const port = 3000
const dotenv = require('dotenv')
dotenv.config()

const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')


mongoose.connect(process.env.MONGO_DB_URL)
.then(()=> console.log("connected"))
.catch((error)=>console.log(error))


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Api routes
app.use('/api/auth' , authRoute)
app.use('/api/users' , userRoute)





app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))