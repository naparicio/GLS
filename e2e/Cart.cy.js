describe('Cart', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.disableOverlays();
    cy.visit('https://www.gls-pakete.de/en/private-customers/parcel-shipping/parcel-configuration');
  })

  it('Add Parcel To Shopping Cart', () => {
    cy.fillRecipient('John', 'Doe', 'Street 1', '1', '99998', 'City 1');
    cy.get('[data-testid="addToCartButton"]').click();
  })
})