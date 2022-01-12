/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Anderson', 'Almeida', 'Ebac', 'Brasil', 'Rua Adelaide', '355', 'São Caetano do Sul', 'São Paulo', '09572-230', '99588-8185', 'andersonn10@yahoo.com.b')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')


    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de Dados', () => {
        EnderecoPage.editarEnderecoFaturamento( 
            dadosEndereco[3].nome,
            dadosEndereco[3].sobrenome,
            dadosEndereco[3].empresa,
            dadosEndereco[3].pais,
            dadosEndereco[3].endereco,
            dadosEndereco[3].numero,
            dadosEndereco[3].cidade,
            dadosEndereco[3].estado,
            dadosEndereco[3].cep,
            dadosEndereco[3].telefone,
            dadosEndereco[3].emai
           
        )

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });





});