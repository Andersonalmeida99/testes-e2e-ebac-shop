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
        cy.visit('http:/lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('[class="product-block grid"]')
            // .first()
            // .last()
            // .eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

    });

    it('Deve adicionar produtos ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando o camando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', '2') 
    
    });

    it('Deve adicionar produtos ao carrinho - Usando o camando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'M', 'Green', '2') 
    
    });

    it('Deve adicionar produtos ao carrinho - Usando o camando customizado', () => {
        cy.addProdutos('Aether Gym Pant', '36', 'Green', '2') 
    
    });

    
    
}) 

