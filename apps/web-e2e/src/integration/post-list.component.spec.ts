describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=postlistcomponent--primary'));
  it('should render the component', () => {
    cy.get('web-post-list').should('exist');
  });
});