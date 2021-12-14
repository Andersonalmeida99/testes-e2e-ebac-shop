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

        cy.visit('minha-conta')
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)

        })

    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.visit('produtos')
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Purple', '2')

        cy.visit('produtos')
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Brown', '2')

        cy.visit('produtos')
        cy.addProdutos('Abominable Hoodie', 'M', 'Red', '1')

        cy.visit('produtos')
        cy.addProdutos('Aether Gym Pant', '36', 'Green', '2')
        cy.get('.woocommerce-message > .button').click()


        cy.visit('checkout')
        cy.get('#terms').click()
        cy.get('#place_order').click({ force: true })



    });





})






