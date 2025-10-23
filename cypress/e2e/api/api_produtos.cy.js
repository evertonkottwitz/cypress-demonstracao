

let token

describe('API - Gerar token, Cadastrar um produto, validar produto existente', () => {
    //uso de hook
    before(() => {
        cy.api_login('fulano@qa.com','teste').then((reponse)=>{
            token = reponse.body.authorization 
        })  
    })

    it('Deve cadastrar um produto com sucesso', () => {
        cy.request({
            method:'POST',
            url:'/produtos',
            headers:{
                authorization: token
            },
            body:{
                "nome": "Logitech Mouse Teste2",
                "preco": 600,
                "descricao": "Mouse",
                "quantidade": 12
            }        
        }).then((reponse)=>{
            expect(reponse.status).to.equal(201)
            expect(reponse.body.message).to.equal('Cadastro realizado com sucesso')
        })
    })

    it('Deve validar produto existente', () => {
        cy.request({
            method:'POST',
            url:'/produtos',
            headers:{
                authorization: token
            },
            body:{
                "nome": "Logitech Mouse Teste2",
                "preco": 600,
                "descricao": "Mouse",
                "quantidade": 12
            },
            failOnStatusCode: false        
        }).then((reponse)=>{
            expect(reponse.status).to.equal(400)
            expect(reponse.body.message).to.equal('Já existe produto com esse nome')
        })
    })

    it('Deve validar token', () => {
        cy.request({
            method:'POST',
            url:'/produtos',
            //headers:{
            //    authorization: token
            //},
            body:{
                "nome": "Logitech Mouse Teste",
                "preco": 500,
                "descricao": "Mouse",
                "quantidade": 10
            },
            failOnStatusCode: false        
        }).then((reponse)=>{
            expect(reponse.status).to.equal(401)
            expect(reponse.body.message).to.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
        })
    })

})

