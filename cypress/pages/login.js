class Login{
    visitar(){
        cy.visit('https://www.saucedemo.com')
     }
     
    preencherCredenciais(user,password){
        cy.get('[data-test="username"]').type(user)
        cy.get('[data-test="password"]').type(password)
     }

    clicarLogin() {
        cy.get('[data-test="login-button"]').click()
     }

    logarComSucesso(user, password) {
        this.visitar()
        this.preencherCredenciais(user, password)
        this.clicarLogin()
        cy.get('[data-test="title"]').should('contain', 'Products')
  }
}

export default new Login()