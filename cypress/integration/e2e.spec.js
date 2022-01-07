/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */




    beforeEach(() => {

        cy.visit('produtos')


    })


    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XL', 'Purple', '4')
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.showlogin').click()


        cy.login(dados.usuario, dados.senha)
        cy.get('.woocommerce-button').click()


        cy.get('.woocommerce-terms-and-conditions-checkbox-text').click()
        cy.get('#place_order').click({ force: true })

        cy.get('.woocommerce-notice').should('contain', 'pedido foi recebido.')




    })
























});