/// <reference types="cypress" />

describe("example tests", () => {
  let email;
  beforeEach("visit page", () => {
    cy.visit("https://automationexercise.com/");
    email = `emir${Date.now()}@exapmle.com`;
  });
  it("navigate to registration form", () => {
    cy.get('a[href*="login"]').should("be.visible").click();
    cy.get(".signup-form").should("be.visible");
    cy.get('[data-qa="signup-name"]').click().type("Emir");
    cy.get('[data-qa="signup-email"]').click().type("1994emirhrnjic@gmail.com");
    cy.get('[data-qa="signup-button"]').click();
    cy.get('form[action*="signup"]').should("be.visible");
    cy.get('[data-qa="create-account"]').should("be.visible").click();
    cy.get("input:invalid")
      .should("be.visible")
      .invoke("prop", "validationMessage")
      .should("eq", "Please fill out this field.");
  });
});
