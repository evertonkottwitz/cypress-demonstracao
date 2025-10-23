import login from "../../pages/login"
import produtos from "../../pages/produtos"
import checkout from "../../pages/checkout"

describe('GUI - Fluxo completo de uma compra', () => {
  beforeEach(() =>{
    login.logarComSucesso('standard_user', 'secret_sauce')
  }
)

  it('Deve realizar uma venda de 3 itens com sucesso', () => {


    //Ordenação de produtos de menor para maior
    produtos.ordernarPorMenorPreco()

    //valida se a ordem está correta
    produtos.verificaOrdenacaoMenorpreco()

    //Adicionando produtos ao carrinho
    produtos.adicionarProduto('Sauce Labs Onesie')
    produtos.adicionarProduto('Sauce Labs Bike Light')
    produtos.adicionarProduto('Sauce Labs Bolt T-Shirt')
    produtos.abrirCarrinho()

    //verifica produtos no carrinho
    cy.verifica_produtos()
    cy.avancarPagina('checkout')

    checkout.preencherInformacoes('Jota','Silva','99999')
    cy.avancarPagina('continue')

    //verifica produtos no checkout
    cy.verifica_produtos()

    //verifica se valor total está correto
    cy.get('[data-test="total-label"]').should('have.text', 'Total: $36.69')

    cy.avancarPagina('finish')  
    
    checkout.verificarMensagemFinal()

    })

  })