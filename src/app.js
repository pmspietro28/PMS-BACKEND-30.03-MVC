const express = require("express")

const userRotes = require("./routes/userRotes")


const app = express()

app.use(express.json())

function callbackDaRaiz( request, response ) {
    response.send("VAI CORINTHIANS!!!! 🦅")
}

app.get("/", callbackDaRaiz)

app.use("/users", userRotes)


module.exports = app