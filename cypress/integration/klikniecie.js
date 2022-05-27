/// <reference types="cypress"/> 

describe("E2E -  Akcje kliknięcia", () => {
    it("Kliknięcie na element", () => {
    cy.visit("/");
    cy.contains('[title="Contact Us"]','Contact us').click();
    cy.get('[title="Return to Home"]').click();


    });

});