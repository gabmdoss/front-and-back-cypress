import { faker } from "@faker-js/faker";

describe('Recruitment', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[name="username"]').type(Cypress.env('username'))
        cy.get('[name="password"]').type(Cypress.env('password'))
        cy.get('.oxd-button').click()
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb').should('be.visible')
    })

    it('Registration successfully', () => {
        cy.get('[href="/web/index.php/recruitment/viewRecruitmentModule"] > .oxd-text').click()
        cy.get('.oxd-button[type="button"]').click()
        cy.contains('Add Candidate').should('be.visible')
        cy.get('[name="firstName"]').type(faker.person.firstName())
        cy.get('[name="middleName"]').type(faker.person.middleName())
        cy.get('[name="lastName"]').type(faker.person.lastName())
        cy.get('input[type="file"]').selectFile('cypress/fixtures/fakeresume.pdf', { force: true})
    })
});