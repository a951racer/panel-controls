const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path')

const app = express()
dotenv.config()

if (process.env.NODE_ENV !== 'production')
    app.use(morgan('dev'));
app.use(cors())
app.use(helmet())
app.use(helmet.frameguard({
    action: 'allow-from',
    domain: 'https://dakboard.com'
  }))

app.get('/', (req, res) => {
    res.send('Welcome to panel controls')
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3050

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);

module.exports = app;

console.log(`Server running on port: ${PORT}`)