/// <reference types="cypress"/>

describe("E2E - Testy API", () => {
    //hook by używać fixture w kilku miejscach 
    beforeEach (function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        });
        cy.fixture("tags").then(data => {
            this.tagiZadanie = data;
        });
    });

    it("Weryfikacja tagów API", () => {
        //intercept - przechwycić 
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        cy.visit("https://angular.realworld.io/");
        //Poczekaj aż się request wykona i kolejna linijka kodu to jakaś czynność
        cy.wait("@requestTag");
        //Spawdzenie czy pojawił się kod200 (zasoby się wczytały)
        cy.get("@requestTag").then(res => {
            console.log(res);
            expect(res.response.statusCode).to.equal(200);
            expect(res.response.body.tags).to.contain("welcome").and.to.contain("implementations");
        });
    });
    //Weryfikacja statusu 403 - Niepoprawne logowanie

    it("Niepoprawne logowanie", function() {
        cy.intercept("POST","https://api.realworld.io/api/users/login").as("requestLogin");
        // Pobierz znacznik, który dodatkowo posiada:
        cy.get('a.nav-link').contains("Sign in").click();
        cy.login("test123@test.pl","1234");
        cy.wait("@requestLogin");
        cy.get("@requestLogin").then(res => {
            console.log(res);
            // Jednorazowy cy.fixture
            // cy.fixture("example").then(data => {
            expect(res.response.statusMessage).to.equal(this.daneApi.statusMessage403);
            expect(res.response.statusCode).to.equal(this.daneApi.statusCode);        
        });
    });

    it("Poprawne logowanie", function() { 
        cy.intercept("GET", "https://api.realworld.io/api/tags", {fixture: 'tags.json'}).as("requestTag");
        cy.login("domi113@smth.com","domi1@");
        cy.wait("@requestTag");
        cy.get("@requestTag").then(res => {
            console.log(res);
            expect(res.response.body.tags).to.equal(this.tagiZadanie.tags);
        });

    });

});