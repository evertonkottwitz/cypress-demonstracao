describe.skip('teste de login', () => { //exemplo para pular testes .skip
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('jotasilva123@gmail.com')
    cy.get('[data-testid="senha"]').type('jotajota1010')
    cy.get('[data-testid="entrar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('h1').contains('Lista de Compras')
  })

    it.only('Login com falha', () => { // exemplo para rodar apenas este trecho exclusivo .only
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('jotasilva123@gmail.com')
    cy.get('[data-testid="senha"]').type('senhaerrada')
    cy.get('[data-testid="entrar"]').click()    
    cy.get('.alert > :nth-child(2)').contains('Email e/ou senha inválidos')
  })
})

