describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=postdetailcomponent--primary'));
  it('should render the component', () => {
    cy.get('web-post-detail').should('exist');
  });
});