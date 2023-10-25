const express  = require('express')
const app = express('path')
const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => console.log(`💬 server on port ${PORT}`))

app.use(express.static(__dirname, 'public'))