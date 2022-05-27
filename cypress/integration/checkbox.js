/// <reference types="cypress"/> 

describe("Akcja - Zaznaczenie checkboxa", () => {
    it("Checkbox", () => {
        cy.visit("/index.php?id_category=3&controller=category");

        //Znajdywanie i wydobycie jednym getem, więcej elementów
        cy.get("#ul_layered_category_0").find("input").then(checkbox => {
            cy.get(checkbox).eq(0).check();
            // {force:true} - jeśli jakiś element przysłoni checkboxa, to i tak zostanie zaznaczony
            // cy.get(checkbox).eq(1).check({force: true});
            cy.get(checkbox).eq(1).check().invoke("prop","checked").then(zaznaczony => {
                 cy.log(zaznaczony);

        //Zaznaczenie kilku checkboxów na raz
         cy.get("#ul_layered_id_attribute_group_1").find("input").check();

            });
        });
    });
});