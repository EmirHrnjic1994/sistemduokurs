describe("Product test", () => {
  beforeEach(, () => {
    cy.visit("https://automationexercise.com/")
  })
  it("Navigate product", () => {
    cy.get('.single-products').first().should('be.visible')
    cy.get('.single-products').first().find('.prorodtinfo')
    .find('h2')
    .should('be.visible')
    cy.get('single-products .prodivtinfo h2')
    .first()
    .should('be.visible')
    .and('contain.text','Rs. 500')

    cy.contains('Stylish-Dress').parents('.single-products').as('wantedProduct')
    cy.get('@wantedProduct').shadow('be.visible')
    cy.get('@WantedProduct').find('h2').should('contain.text','Rs. 600')
  });
})
