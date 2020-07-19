// Press gesture - Este script de automação realiza longclick sobre uma div
// e verifica através de uma asserção se o quadrado (div) se expandiu ne proporção esperada (225 x 225 px).
//
// @author: Marcos Lima

const url = 'https://codepen.io/choskim/full/RLYebL'
const iframe = 'https://codepen.io/choskim/fullpage/RLYebL'

beforeEach(function loadAppIFrameAndSetAsOurTestDocument () {
  cy.request({
      method: 'GET',
      url: iframe,
      headers: {
        referer: url,
        accept: 'text/html'
      }
    })

    .its('body')
    .then((html) => {
      cy.log('obtendo doc da url', iframe)
      cy.log('tamanho doc', html.length)
      cy.wrap(html)
        .its('length')
        .should('be.greaterThan', 2000)

      const doc = cy.state('document')

      cy.log('HTML test document')
      doc.write(html)
      doc.close()
    })

    cy.wait(1000)
    cy.url().should('include', 'localhost:')
})

it('long click', () => {    
    cy.get('.square').trigger('mousedown')
    cy.wait(3000)
    cy.get('.square').trigger('mouseleave')
    cy.get('.square').should('have.css', 'width', '255px')
})