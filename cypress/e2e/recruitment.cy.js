import { faker } from "@faker-js/faker";

describe('Recruitment', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[name="username"]').should('be.visible').type('Admin')
        cy.get('[name="password"]').should('be.visible').type('admin123')
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