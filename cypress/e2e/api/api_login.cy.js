

describe('API - Teste funcional de Login', () => {
    it('Deve realizar login com sucesso', () => {
        cy.api_login('fulano@qa.com','teste').then((reponse)=>{
            expect(reponse.status).to.equal(200)
            expect(reponse.body.message).to.equal('Login realizado com sucesso')
        })
    })

    it('Deve validar senha incorreta', () => {
        cy.api_login('fulano@qa.com','SenhaIncorreta').then((reponse)=>{
            expect(reponse.status).to.equal(401)
            expect(reponse.body.message).to.equal('Email e/ou senha inválidos')
        })  
            
    })
})