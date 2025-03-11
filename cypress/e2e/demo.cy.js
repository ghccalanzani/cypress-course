/// <reference types='Cypress'/>

describe('Demo do Cypress E2E', () => {
  it('Validar URL', () => {
    cy.visit('https://example.com')
    cy.url().should('contain', 'example.com')
  })

  it('Validar título', () => {
    cy.visit('https://example.com')
    cy.title().should('contain', 'Example Domain')

  })
})