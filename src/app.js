const express = require("express")

const userController = require("./controllers/userController")

const app = express()

app.use(express.json())

function callbackDaRaiz( request, response ) {
    response.send("BORA VASCO DA GAMAAA!!!!")
}

app.get("/", callbackDaRaiz)

app.get("/users", userController.getAllUsers)

app.post("/users", userController.createUser)

module.exports = app
