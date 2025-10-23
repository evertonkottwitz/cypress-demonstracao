

    Cypress.Commands.add('verifica_produtos', () => { 
      cy.get('[data-test="cart-list"] > :nth-child(3)').contains('Sauce Labs Onesie')
      cy.get('[data-test="cart-list"] > :nth-child(4)').contains('Sauce Labs Bike Light')
      cy.get('[data-test="cart-list"] > :nth-child(5)').contains('Sauce Labs Bolt T-Shirt')
 })

    Cypress.Commands.add('avancarPagina',(nomebotao) => {
      cy.get(`[data-test="${nomebotao}"]`).click()
 } )

