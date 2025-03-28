import common from '../../support/commonUtils.js'

describe('Login', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  
  it('Login successfully', () => {
    const data = common.dataAtual()
    cy.get('[name="username"]').type(Cypress.env('username'))
    cy.get('[name="password"]').type(Cypress.env('password'))
    cy.get('.oxd-button').click()
    cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb').should('be.visible')
    cy.screenshot('screenshot' + data);
  })

  it('Password Incorrect', () => {
    cy.get('[name="username"]').type(Cypress.env('invalid_username'))
    cy.get('[name="password"]').type(Cypress.env('invalid_password'))
    cy.get('.oxd-button').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('Username Incorrect', () => {
    cy.get('[name="username"]').should('be.visible').type(Cypress.env('username'))
    cy.get('[name="password"]').should('be.visible').type(Cypress.env('invalid_password'))
    cy.get('.oxd-button').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('Password empty', () => {
    cy.get('[name="username"]').should('be.visible').type(Cypress.env('username'))
    cy.get('.oxd-button').click()
    cy.contains('Required').should('be.visible')
  })

  it('Username empty', () => {
    cy.get('[name="password"]').should('be.visible').type(Cypress.env('password'))
    cy.get('.oxd-button').click()
    cy.contains('Required').should('be.visible')
  })

  
  it('Username and password empty', () => {
    cy.get('.oxd-button').click()
    cy.get('.oxd-form > div:nth-of-type(1) .oxd-text').should('be.visible')
    cy.get('.oxd-form > div:nth-of-type(2) .oxd-text').should('be.visible') })
});