describe('Checkout', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.disableOverlays();
    cy.visit('https://www.gls-pakete.de/en/private-customers/parcel-shipping/checkout');
  })

  it('Sender information with valid data', () => {
    cy.fillSender('Jane', 'Doe', 'Street 2', '2', '00001', 'City 2', 'jane.doe@gmail.com');
    cy.get('[data-testid="saveSenderAddressButton"]').click();
  })
})