/// <reference types="cypress"/> 

describe("Akcja - Metoda Invoke", () => {
    it("Invoke", () => {
        cy.visit("/");

        //invoke - pobranie właściwości, atrybutu, tekstu, tutaj tekstu - czy zostanie zwrócony 
        cy.get('[title="Contact Us"]').invoke("text").then(tekst => {
            cy.log(tekst);
        });

        //pobieranie atrybutu z dowolnego znacznika
        cy.get('[title="Contact Us"]').invoke("attr","href").then(link => {
            cy.log(link);
        });

        cy.get('[title="Contact Us"]').invoke("attr","title").then(title => {
            cy.log(title);
        });

        //pobieranie wartości 
        cy.get("#search_query_top").type("Przykładowa wartość").invoke("prop", "value").then(wartosc => {
            cy.log(wartosc);
        });

        //Moj test
        cy.get("#newsletter-input").type('abc@gmail.com{enter}', {delay: 500});
        
    });
});