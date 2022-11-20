describe('empty spec', () => {
  it('passes', () =>  {
    cy.visit('http://127.0.0.1:5500/index.html')
    
    cy.get('.input__search').type ('25 {enter}')
    cy.wait(1000)
    cy.get('.pokemon__number').contains('25')

    cy.get('.input__search').type ('pikachu {enter}')
    cy.wait(1000)
    cy.get('.pokemon__name').contains('pikachu')

  })
})