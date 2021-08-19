/// <reference types="cypress" />
let user;
const username = Cypress.env('username');
const password = Cypress.env('password');
const usernameCyrillic = Cypress.env('usernameCyrillic');
const passwordCyrillic = Cypress.env('passwordCyrillic');

describe('', () => {
 

    it('Test for basic attributes of the page', () =>{
        cy.url().should('eq', 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
        cy.get('center h1').should('contain', 'QA Portal Login');
        cy.get('[name="username"]').should('have.attr', 'placeholder').and('eq', 'Username');
        cy.get('[name="password"]').should('have.attr', 'placeholder').and('eq', 'Password');
        cy.get('.btn.btn-success').should('contain', 'Login');
    })

    it('login using credentials', () => {
        cy.login(username, password);
        cy.get('.form-group.has-error .help-block')
        .should('not.contain', 'No account found with that username.')
        .and('not.contain', 'Please enter username.')
        .and('not.contain', 'Please enter your password.');
        cy.screenshot();
    })

    it('if requirements fields are empty', () => {
        cy.loginWithoutCreds(username, password);
        cy.url().should('eq', 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
        cy.get('center h1').should('contain', 'QA Portal Login');
        cy.get('[name="username"]').should('not.have.value', username);
        cy.get('[name="password"]').should('not.have.value', password);
        cy.contains('.help-block', 'Please enter username.').should('contain', 'Please enter username.');
        cy.contains('.help-block', 'Please enter your password.').should('contain', 'Please enter your password.');
        cy.get('.btn.btn-success').should('contain', 'Login');
    })

    it('if password field is empty', () => {
        cy.loginWithoutPassword(username, password);
        cy.url().should('eq', 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
        cy.get('center h1').should('contain', 'QA Portal Login');
        cy.get('[name="username"]').should('have.value', username);
        cy.get('[name="password"]').should('not.have.value', password);
        cy.contains('.help-block', 'Please enter your password.').should('contain', 'Please enter your password.');
        cy.get('.btn.btn-success').should('contain', 'Login');
    })

    it('if username field is empty', () => {
        cy.loginWithoutUsername(username, password);
        cy.url().should('eq', 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
        cy.get('center h1').should('contain', 'QA Portal Login');
        cy.get('[name="username"]').should('not.have.value', username);
        cy.get('[name="password"]').should('not.have.value', password);
        cy.contains('.help-block', 'Please enter username.').should('contain', 'Please enter username.');
        cy.get('.btn.btn-success').should('contain', 'Login');
    })

    it('login with cyrillic credentials', () => {
        cy.login(usernameCyrillic, passwordCyrillic)
        cy.url().should('eq', 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
        cy.get('center h1').should('contain', 'QA Portal Login');
        cy.get('[name="username"]').should('have.value', usernameCyrillic);
        cy.get('[name="password"]').should('not.have.value', passwordCyrillic);
        cy.get('body').should('contain', 'Oops! Something went wrong. Please try again later.')
        cy.get('.btn.btn-success').should('contain', 'Login');
    })
})

