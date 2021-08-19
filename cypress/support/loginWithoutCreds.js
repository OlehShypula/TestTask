Cypress.Commands.add('loginWithoutCreds', (username = 'testUsername', password = 'Pa$$w0rd!') => {
  Cypress.log({
    name: 'login',
    message: `${username} | ${password}`,
})
cy.get('.btn.btn-success').click();
})