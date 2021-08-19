Cypress.Commands.add('loginWithoutPassword', (username = 'testUsername', password = 'Pa$$w0rd!') => {
  Cypress.log({
    name: 'login',
    message: `${username} | ${password}`,
})
cy.get('[name="username"]').type(username);
cy.get('.btn.btn-success').click();
})