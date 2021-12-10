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
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.visit('produtos')
        var quantidade = 2

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

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






