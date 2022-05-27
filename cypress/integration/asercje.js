/// <reference types="cypress"/>
//2 rodzaje asercji 
describe("E2E - asercje", () => {
    it('Asercje expect oraz should', () => {
        cy.visit("/");

        //Weryfikacja tekstu - should-2 parametry
        cy.get('a[title="Contact Us"]').should("contain", "Contact us");

        //Weryfikacja tekstu - expect
        cy.get('a[title="Contact Us"]').then(zakladka => {
            expect(zakladka).contain("Contact us");
        
        });

        //Sprawdzenie czy nie zawiera tekstu  
        cy.get('a[title="Contact Us"]').should("not.contain", "Contact Us");
        cy.get('a[title="Contact Us"]').then(zakladka => {
            expect(zakladka).not.to.contain("Contact Us");
        });

        //Weryfikacja czy znacznik posiada klasę
        cy.get('#search_query_top').should("have.class", "form-control");
        cy.get('#search_query_top').then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.class("form-control");
        });

        //Czy element jest widoczny w DOM
        cy.get('#search_query_top').should("be.visible");

        //Czy element jest czasem nie widoczny 
        // cy.get('#search_query_top').should("not.be.visible");

        //Czy element jest widoczny w DOM - expect
        cy.get('#search_query_top').then(wyszukiwarka => {
            expect(wyszukiwarka).to.be.visible;
        });

        //Weryfikacja ilości pobranych elementów
        cy.get("ul.sf-menu").find("li").should("have.length",14);
        cy.get("ul.sf-menu").find("li").then(zakladki => {
            expect(zakladki).to.have.length(14);
        });

        //Weryfikacja wartość css danego elementu - paramtery
        cy.get('#search_query_top').should("have.css", "line-height","45px");
        cy.get('#search_query_top').then(wyszukiwarka => {
            expect(wyszukiwarka).to.have.css("line-height","45px");
        });


    });
});