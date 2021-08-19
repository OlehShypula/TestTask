Cypress.Commands.add('login', (username = 'testUsername', password = 'Pa$$w0rd!') => {
  Cypress.log({
    name: 'login',
    message: `${username} | ${password}`,
})
cy.get('[name="username"]').type(username);
cy.get('[name="password"]').type(password);
cy.get('.btn.btn-success').click();
})