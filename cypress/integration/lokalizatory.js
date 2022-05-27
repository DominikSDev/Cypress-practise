/// <reference types="cypress"/> 

describe("E2E - Lesson", () => {
    it("Lokalizatory", () => {
        cy.visit("/")

        //po znaczniku
        cy.get("a");

        //identyfikator
        cy.get("#search_query_top");

        //po klasie
        cy.get(".form-control");

        //po atrybucie - w nawiasach kwadratowych
        cy.get('[name="search_query"]');
        cy.get('[placeholder="Search"]');

        //dokładniejszy atrybut wraz z podaniem znacznika 
        cy.get('input[placeholder="Search"]');

        //po kilku atrybutach 
        cy.get('[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]');

        //zalecana praktyka pobierania elementów przez Cypress
        // cy.get('[data-cy="wyszukiwarka"]');
    });
    it.only("lokalizatory część 2", () => {
        cy.visit("/")

        //Pobieranie elementów po jego tekście
        cy.contains("Shop now !");

        //Po tekście z atrybutami
        cy.contains('[title="Contact Us"]','Contact us');

        //Po rodzicu - szukamy jakieś id, atrybut u rodzica po którym możemy się odwołać, a po parents podajemy że chcemy wszystkie li, które ten rodzic posiada i określamy po indeksie, które li
        cy.get('li').parents('#home-page-tabs').find('li').eq(1);
        // lub dla pierwszego elementu metoda .first();
        cy.get('li').parents('#home-page-tabs').find('li').first();
        //po tekście, nie indeksie
        cy.get('li').parents('#home-page-tabs').find('li').contains("Best Sellers");
});


});