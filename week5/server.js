const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const PORT = 9000

const bountyHunterRouter = require('./routes/bounties')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/bounties', bountyHunterRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})