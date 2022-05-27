///<reference types="cypress"/>

describe("Lighthouse Test", () => {
    it("Pierwszy test Lighthouse", () => {
        cy.visit("https://czyitjestdlamnie.pl")
        cy.lighthouse({
            performance: 85,
            accessibility: 100,
            "best-practise": 85,
            seo: 85,
            pwa: 100
        });
    });
});