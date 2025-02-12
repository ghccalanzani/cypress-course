/// <reference types="Cypress" />

describe('Meu primeiro teste', () => {
  it('funciona corretamente', () => {
    //Visitar site
    cy.visit('https://example.cypress.io')
    //Verificar se existe e clicar
    cy.contains('type').click() //(Cypress interrompe comandos e espera até 60s para nova página carregar ao mudar de página)
    //Verificar se URL possui caminho especificado
    cy.url().should('include', '/commands/actions')
    //Encontrar elemento (classe) e digitar
    cy.get('.action-email').type('fake@email.com')
    //Verificar se foi digitado corretamente
    cy.get('.action-email').should('have.value', 'fake@email.com')
    
  })
})