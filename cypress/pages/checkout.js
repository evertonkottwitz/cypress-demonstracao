class Checkout{
    preencherInformacoes(nome, sobrenome, cep) {
        cy.get('[data-test="firstName"]').type(nome)
        cy.get('[data-test="lastName"]').type(sobrenome)
        cy.get('[data-test="postalCode"]').type(cep)
    }

    
    verificarMensagemFinal() {
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
  }
}

export default new Checkout()