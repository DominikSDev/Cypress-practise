/// <reference types="cypress"/>

describe("Wykonywanie zapytania bezpośrednio do API", () => {
    //hook by używać fixture w kilku miejscach 
    beforeEach (function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        });
    });

    it("Autoryzacja + Dodawanie nowego artykułu", () => {
        const daneAutoryzacja = {
            "user": {
                "email": "domi113@smth.com",
                "password": "domi1@"
            }
        }
        //Bezpośrednie przechwycenie requesta - po stronie backendu(Bez frontendu)
        cy.request("POST", "https://api.realworld.io/api/users/login",daneAutoryzacja)
        //Jeśli zwrócisz mi body
        .its("body").then(res => {
            // console.log(res);
            //Pobieranie tokenu dynamicznie - czyli za każdym razem od nowa, jeśli by się zmienił 
            const authToken = res.user.token;
            // console.log(authToken);

         const daneArtykul = {
            "article": {
                "tagList": [],
                "title": "Tytuł bezpośrednio z API",
                "description": "test",
                "body": "test"
                }
            }
        
            
        cy.request({
            method: "POST",
            url: "https://api.realworld.io/api/articles/",
            body: daneArtykul,               
            headers: {
                'Authorization': 'Token ' + authToken
            }
            }).then(res => {
                expect(res.status).to.equal(200);
            })
        });
    });
});