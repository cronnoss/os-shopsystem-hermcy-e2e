Cypress.Commands.add("visitWithoutFetch", (path, opts = {}) => {
    cy.visit(
        path,
        Object.assign(opts, {
            onBeforeLoad(win) {
                delete win.fetch;
            }
        })
    );
});

Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: '/login',
        body: {
            "lemail": Cypress.env("login"),
            "lpassword": Cypress.env("password")
        }
    }).then((resp) => {
        window.localStorage.setItem('jwt', resp.body._token);
    })
})