const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

mongoose.connect('mongodb+srv://ruben:mayhem666@cluster0.6zvuxq8.mongodb.net/auth?retryWrites=true&w=majority')

const app = express()

app.use(express.json())

app.post('/register', async (req,res) => {
    const {body} = req
    console.log({body})
    try {

    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})
