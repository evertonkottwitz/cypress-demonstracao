
describe('GUI - teste funcional login', () => {
  it('Login sem sucesso - Usuário incorreto ', () => {
    cy.login('usuario_errado', 'secret_sauce')
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')    
    })
  it('Login sem sucesso - Senha incorreta ', () => {
    cy.login('standard_user', 'senha_errada')
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')    
    })
  it('Login com sucesso', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="title"]').contains('Products')    
    })

  })