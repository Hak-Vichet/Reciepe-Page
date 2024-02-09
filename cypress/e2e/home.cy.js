describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.compareSnapshot('')
  })

  it('Does not do much', () => {
    expect(true).to.equal(false)
  })

  

})
