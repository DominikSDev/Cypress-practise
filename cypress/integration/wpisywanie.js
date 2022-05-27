/// <reference types="cypress"/> 

describe('E2E - Akcja wpisywania', () => {
    it('Wpisywanie wartości w pole', () =>{
        cy.visit("/");
        cy.searchPharse("Nowy tekst{backspace}", 1200);

        //Kliknięcie wraz z symulacją przycisku {enter}
        // cy.get("#search_query_top").type("Przykładowy produkt{enter}");

        // z paramtertem delay (dla wolnych stron wpisywanie liter z opóźnieniem)
        // cy.get("#search_query_top").type("Przykładowy produkt{backspace}", {delay: 500});

    });

    it('Czyszczenie wartości z pola input', () => {
        // cy.get("#search_query_top").clear();
        cy.clearInput();
    })
})