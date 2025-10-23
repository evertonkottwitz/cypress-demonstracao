class Produtos{

    ordernarPorMenorPreco() {
      cy.get('[data-test="product-sort-container"]').select('Price (low to high)')  
    }

    verificaOrdenacaoMenorpreco() {
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').contains('Sauce Labs Onesie')
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').contains('Sauce Labs Bike Light')
        cy.get(':nth-child(3) > [data-test="inventory-item-description"]').contains('Sauce Labs Bolt T-Shirt')
    }    
    
    adicionarProduto(nome) {
        cy.contains(nome).click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()
  }

    abrirCarrinho() {
        cy.get('[data-test="shopping-cart-link"]').click()
  }
}

export default new Produtos()