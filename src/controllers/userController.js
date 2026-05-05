const userModels = require("../models/userModels")

function getAllUsers(request, response) {
    const users = userModels.findAll() 

    return response.json(users)
}

module.exports = {
    getAllUsers 
}