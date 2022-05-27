/// <reference types="cypress"/> 

import AlertPage from "../support/page-object/alertPage.js";

describe("E2E - Alerty", () => {
    it("Alert", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/");
        AlertPage.clickOnBtnAlert1();
        AlertPage.verifyAlertText("Przykładowa treść alertu");
        // cy.get("#alert").click();
        //Metoda do alertów - 1) window:alert 2) window:confirm
        // cy.on("window:alert", tresc => {
        //     //weź mi zbadaj czy ta treść
        //     expect(tresc).to.equal("Przykładowa treść alertu");
        });

    it("Alert confirm", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/");
        AlertPage.clickOnBtnAlert2();
        AlertPage.verifyAlertConfirmText();
        AlertPage.acceptAlert();


        // cy.get("#alert-confirm").click();
        // cy.on("window:confirm", tresc => {
        //     expect(tresc).to.equal("Zaakceptuj aby kontynuować!");
        //     //potwierdzenie opcji z alertu 
        // cy.on("window:confirm", () => false);
        // });
    });

    
});