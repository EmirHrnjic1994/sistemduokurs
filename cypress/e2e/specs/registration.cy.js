/// <reference types="cypress" />

describe("registration tests", () => {
  beforeEach("Navigate to automationexercise", () => {
    cy.visit("https://automationexercise.com/");
  });
  it("navigate to registration form", () => {
    cy.get('a[href*="login"]').should("be.visible").click();
    cy.get(".signup-form").should("be.visible");
  });
});
