/// <reference types="Cypress" />

describe('Meu primeiro teste', () => {
  it('Url e redirecionamento', () => {
    //Visitar site
    cy.visit('https://example.cypress.io')
    //Validar título do site
    cy.title().should('contain', 'Cypress')
    //Verificar se existe na página e clicar
    cy.contains('type').click()
    //Verificar se URL possui caminho especificado
    cy.url().should('include', '/commands/actions')
  })

  it('Encontrar e digitar elemento', () => {
    //Visitar o site no caminho especificado
    cy.visit('https://example.cypress.io/commands/actions')
    //Encontrar elemento (classe) e digitar
    cy.get('.action-email').type('fake@email.com')
    //Verificar se foi digitado corretamente
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })

})