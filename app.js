const express = require("express")
const queries = require("./queries")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get("/", (request, response) => {
    queries.listAll().then(result => response.json({
        result
    }))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})