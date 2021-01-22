export const visitAppLoginWindow = () => {
    // try to visit app login window
    cy.visitWithoutFetch("");
};

export const enterUserCredentials = (credentials) => {
    // try to enter default credentials
    cy.get("input[name='lemail']")
        .type(credentials.login, {log: false})
    //.should("have.value", credentials.login);
    cy.get("input[name='lpassword']")
        .type(credentials.password, {log: false})
    //.should("have.value", credentials.password);
    cy.get("input[type='submit']").click();
};

export const quickDefaultLogin = () => {
    // visit app login window
    cy.visitWithoutFetch("");

    // get mock data
    cy.fixture("users/default.json").then(defaultUser => {
        // try to sign in
        enterUserCredentials(defaultUser);

        // check if loading
        cy.get("span[class='username']", {timeout: 15000}).should("be.visible")
    });
};