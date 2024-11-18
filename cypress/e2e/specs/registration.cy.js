/// <reference types="cypress" />

describe("example tests", () => {
  beforeEach("visit page", () => {
    cy.visit("https://automationexercise.com/")
  })
  it("navigate to registration form", () => {
    cy.get('a[href*="login"]').should("be.visible")
  })
})
