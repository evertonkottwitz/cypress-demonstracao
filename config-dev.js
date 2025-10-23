const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.join(__dirname, './.env.dev')
})

const e2e = {
  ...baseConfig.e2e,
  baseUrl: 'https://www.dev.saucedemo.com/', //exemplo ficticio de url em ambiente desenvolvimento
  env: {
    username: process.env.BASEURL, // BOA PRATICA: deixar dados sensiveis não visiveis no git
    password: process.env.PASSWORD
  }
}

module.exports = defineConfig({
  ...baseConfig,
  e2e
})