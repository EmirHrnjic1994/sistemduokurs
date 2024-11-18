/// <reference types="cypress" />

describe("example tests", () => {
  beforeEach("visit page", () => {
    cy.visit("https://automationexercise.com/")
  })

  it("Navigate tu contact us from", () => {
    cy.get('a[href*="contact"]').should("be.visible").click()
    cy.url().should("contain", "contact_us")
    cy.contains("contact us", { matchCase: false }).should("be.visible")
  })

  it("send message through contact us form", () => {
    cy.get('a[href="/contact_us"]').should("be.visible").click()
    cy.url().should("contain", "contact")
    cy.get('[data-qa="name"]').should("be.visible").clear().type("emir")
    cy.get('[data-qa="email"]').clear().type("1994emirhrnjic@gmailcom")
    cy.get('[data-qa="subject"]').clear().type("subjekt 12345")
    cy.get('[data-qa="message"]').clear().type("prijava na stranicu")

    cy.get('[data-qa="submit-button"]').should("be.visible").click()
    cy.get(".alert-success").contains(
      "success! your details have been submitted successfully.",
      { matchCase: false }
    )
  })
})
