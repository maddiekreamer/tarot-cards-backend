const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")

app.use(cors())

app.get("/", (request, response) => {
    response.send('THE ROUTE WORKED!')
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})