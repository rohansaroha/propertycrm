const express = require('express');
const UserService = require('../../../services/UserService');
const constants = require('../../../constants')
const {AuthenticationUtil} = require("../../../services/JWTService");
const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
    const body = req.body;
    const user = await UserService.createUser(body);
    res.status(201).send(user);
})

authRouter.post('/login', async (req, res) => {
    const body = req.body;
    const user = await UserService.login(body);
    if(user === 'Invalid email') {
        res.status(400).send(('Invalid email'));
    } else if(user === 'Invalid password') {
        res.status(400).send(('Invalid password'));
    } else res.status(200).send(user);
})

module.exports = {authRouter};
