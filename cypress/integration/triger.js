/// <reference types="cypress" />

describe("E2E - Skrolowanie / Najechanie", () => {
    it("Najechanie na dany element", () => {
        cy.visit("/");
        //najechanie - trigger
        cy.get('a[title="Dresses"]').eq(1).trigger('focus');
        cy.get('li.sfHover a[title="Summer Dresses"]').click();

    });

    it("Skrolowanie do boxa Specials", () => {
        cy.get('a[title="Specials"]').first().scrollIntoView();
    })
});