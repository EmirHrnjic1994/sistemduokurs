/// <reference types="cypress" />

<<<<<<< HEAD
describe("registration tests", () => {
  beforeEach("Navigate to automationexercise", () => {
    cy.visit("https://automationexercise.com/");
  });
  it("navigate to registration form", () => {
    cy.get('a[href*="login"]').should("be.visible").click();
    cy.get(".signup-form").should("be.visible");
  });
});
=======
describe("example tests", () => {
  let email
  beforeEach("visit page", () => {
    email = `emir${Date.now()}@exapmle.com`
    cy.visit("https://automationexercise.com/")
  })
  it("navigate to registration form", () => {
    cy.get('a[href*="login"]').should("be.visible").click()
    cy.get(".signup-form").should("be.visible")
    cy.get('[data-qa="signup-name"]').click()
    cy.get('[data-qa="signup-email"]').click().type("1994emirhrnjic@gmail.com")
    cy.get('[data-qa="signup-button"]').click()
    cy.get('form[action*="signup"]').should("be.visible")
  })
  it("succesfull trgistration", () => {
    cy.get('a[href*="login"]').should("be.visible").click()
    cy.get(".signup-form").should("be.visible")
    cy.get('[data-qa="signup-name"]').clear().type("Emir")
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('form[action*="signup"]').should("be.visible")
    cy.get('input[type="radio"]').should("be.visible").check("Mr")
    cy.get('[data-qa="email"]')
      .should("be.disabled")
      .and("have.attr", "value", email)
    cy.get('[data-qa="password"]').clear().type("test123")
    cy.get('[data-qa="days"]').select(15)
    cy.get('[data-qa="months"]').select(1)
    cy.get('[data-qa="years"]').select("1994")
    cy.get("#newsletter").check()
    cy.get("#optin").check()
    cy.get('[data-qa="first_name"]').clear().type("emir")
    cy.get('[data-qa="last_name"]').clear().type("hrnjic")
    cy.get('[data-qa="company"]').clear().type("qa")
    cy.get('[data-qa="address"]').clear().type("adresa")
    cy.get('[data-qa="country"]').select("Canada")
    cy.get('[data-qa="state"]').clear().type("sarajevo")
    cy.get('[data-qa="city"]').clear().type("sarajevo")
    cy.get('[data-qa="zipcode"]').clear().type("12345")
    cy.get('[data-qa="mobile_number"]').clear().type("123456789")

    cy.get('[data-qa="create-account"]').should("be.visible").click()

    cy.get('[data-qa="account-created"]')
      .should("be.visible")
      .and("contain.text", "Account Created!")
  })
})
>>>>>>> 66346008e4ed18530d6910fe2fcc583c3c811d80
