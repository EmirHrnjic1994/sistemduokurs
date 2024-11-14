/// <reference types="cypress" />

describe("example tests", () => {
  beforeEach("visit page", () => {
    cy.visit("https://automationexercise.com/")
  })
  it("Navigate to login page", () => {
    cy.get('a[href="/login"]').should("be.visible").click()
    cy.url().should("contain", "login")
    cy.get('[data-qa="login-email"]')
      .should("be.visible")
      .and("not.be.disabled")
  })
})
