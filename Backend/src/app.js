const express = require("express")
const router = require("./router")

const app = express()

app.use(express.json()) //configurando a API para trabalhar com dados JSON
app.use(router)

module.exports = app //exportando o app
