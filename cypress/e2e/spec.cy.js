describe('teste de login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('jotasilva123@gmail.com')
    cy.get('[data-testid="senha"]').type('jotajota1010')
    cy.get('[data-testid="entrar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('h1').contains('Lista de Compras')
  })

    it.only('Login com falha', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('jotasilva123@gmail.com')
    cy.get('[data-testid="senha"]').type('senhaerrada')
    cy.get('[data-testid="entrar"]').click()    
    cy.get('.alert > :nth-child(2)').contains('Email e/ou senha inválidos')
  })
})

//jota silva
//jotasilva123@gmail.com
//jotajota1010