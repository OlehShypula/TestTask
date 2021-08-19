Cypress.Commands.add('loginWithoutUsername', (username = 'testUsername', password = 'Pa$$w0rd!') => {
  Cypress.log({
    name: 'login',
    message: `${username} | ${password}`,
})
cy.get('[name="password"]').type(password);
cy.get('.btn.btn-success').click();
})