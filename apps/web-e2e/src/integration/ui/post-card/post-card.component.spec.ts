describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=postcardcomponent--primary'));
  it('should render the component', () => {
    cy.get('web-post-card').should('exist');
  });
});