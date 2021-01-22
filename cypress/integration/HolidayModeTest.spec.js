import {quickDefaultLogin} from "../support/signin_helpers";

describe("HolidayModeTest", () => {

    it('Preconditions:\n' +
        'Restaurant "pizzataxi"  should be closed for Holiday Vacations in the small admin panel.\n' +
        '\n' +
        '1. Go shop page \n' +
        '2. On shop page should appear a window with a "holiday" text.\n' +
        '3. Try to make order (it should be impossible).', () => {

        //Go shop page
        cy.visit('/pizzataxi-bei-enrico-kamp-lintfort/1175');

        //On shop page should appear a window with a "holiday" text.
        cy.contains("This is test for hilidayMode.").should('be.visible');
        cy.contains("Speisekarte ansehen").should('be.visible').click();

        //try click on category name "Nudelgerichte -"
        cy.contains("Nudelgerichte -").should('be.visible').click();

        //try click to add first product to the basket
        cy.get('[qa-data=add-to-cart-btn]').eq(0).should('be.visible').click();

        //try see empty-basket div
        cy.get('[id=empty-basket]').should('be.visible');

        //try see Geschlossen name in the first product
        cy.contains('Geschlossen').first().should('be.visible');
    });
});