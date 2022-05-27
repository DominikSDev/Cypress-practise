/// <reference types="cypress"/>

import selectPage from "../support/page-object/selectPage";

describe("cos", () => {
    it("cos", () => {
        cy.visit("/index.php?id_category=3&controller=category");
        // selectPage.selectAllOption();


    });
});