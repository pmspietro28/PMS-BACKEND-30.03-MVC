const userModels = require("../models/userModels")

function getAllUsers(request, response) {
    const users = userModels.findAll() 

    return response.json(users)
}
 
function createUser (req, res)  {
    //const name = req.body.name
    
    const { name} = req.body

    const newUser = {
        id: Date.now(),
        name: name
    }

    const createdUser = userModels.create(newUser)

    return res.status(201).json(createdUser)
}

const getUsersById = (req, res) => {
    
    const id = Number (req.params.id)

    const user = userModels.findById(id)

    if( !user) {
        return res.status (404).json({
            message: "Usuario não encontrado"
        })
    }
 
    return res.json(user)
} 


module.exports = {
    createUser,
    getAllUsers,
    getUsersById
}