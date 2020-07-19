// Press gesture - Primeira tentativa de realizar um clique na div square
// e checar a alteração de proporção.
//
// @author: Marcos Lima

describe ('Press gesture', function () {
    beforeEach(() => {
        cy.visit('https://codepen.io/choskim/full/RLYebL')
    })

    it('loads', () => {    
        cy.get('div[class="square"]').click()
    })
})
// Tentei resolver o problema primeiro através da abordagem convencional, mas claro, não funcionou.
// Isso pq o CodePen carrega na verdade um iFrame e desta forma o Cypress não consegue identificar
// o elemento para interagir. Passemos então para outra forma...