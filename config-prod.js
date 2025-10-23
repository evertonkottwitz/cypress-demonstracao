const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')

const e2e = {
  ...baseConfig.e2e,
  baseUrl: 'https://www.prod.saucedemo.com/', //exemplo ficticio de url em ambiente produção
  env: {
    username: 'PROD_sauce',
    password: 'PROD_secret'
  }
}

module.exports = defineConfig({
  ...baseConfig,
  e2e
})