/// <reference types='Cypress'/>

describe('Demo do Cypress E2E', () => {
  beforeEach(() => {
    cy.visit('https://example.com')
  })
  afterEach(() => {
    cy.visit('https://google.com')
  })

  it('Validar URL', () => {
    // cy.visit('https://example.com')
    cy.url().should('contain', 'example.com')
  })

  it.only('Validar título', () => {
    cy.title().should('contain', 'Example Domain')
  })

  it('Validar elemento', () => {
    cy.get('h1').should('be.visible')
    cy.wait(1000)
    cy.get('p').should('be.visible')
  })

  it('Recarregar e registrar (log)', () => {
    cy.log('Antes de recarregar')
    cy.reload()
    cy.log('Depois de recarregar')
  })
})