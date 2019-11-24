describe('Should display Game page', ()=> {
    it('It successfully load Game page', ()=> {
        cy.visit('/Game')
        cy.url().should('include', '/Game')
    })
    it('Should contain a header with Es turno de and the current player', ()=> {
        cy.visit('/Game')
        cy.get('header').contains('Es turno de:')
        cy.get('span').should('have.class', 'title turn')
    })
    it('Should contain a main with class game', ()=>{
        cy.visit('/Game')
        cy.get('main').should('have.class', 'game')
    })
    it('Should contain a board made with 9 buttons with class square-box', ()=>{
        cy.visit('/Game')
        cy.get('button').should('have.length', 9)
        cy.get('button').should('have.class', 'square-box')
    })
    it('Should contain a board made with 9 buttons with class square-box', () =>{
        cy.visit('/Game')
        cy.get('button').should('have.length', 9)
        cy.get('button').should('have.class', 'square-box')
    })
    it('Should display an X or an O when user clicks on a Square-box', () => {
        cy.visit('/Game')
        cy.get('#0').click().should('have.value', 'X')
        cy.get('#1').click().should('have.value', 'O')
    })
    it('Should display an X with class green or an O with class pink when user clicks on a Square-box', () => {
        cy.visit('/Game')
        cy.get('#0').click().should('have.value', 'X').should('have.class', 'green')
        cy.get('#1').click().should('have.value', 'O').should('have.class', 'pink')
    })
    it('Should display a span with text ¡Esta casilla está ocupada! when the user clicks two times the same squarebox', ()=> {
        cy.visit('/Game')
        cy.get('label').as('alert')
        cy.get('#0').dblclick()
        cy.get('@alert').contains('¡Esta casilla está ocupada!')
        } 
    )
    it('Clicking in Regresar button should return to homepage', ()=> {
        cy.visit('/Game')
        cy.get('.yellow-button').contains('Salir').click()
        cy.url().should('include', '/')
    })
})

describe('Testing winner moves', ()=> {
    it('Should render a modal with the winner X with move 1', ()=>{
        cy.visit('/Game')
        cy.get('#0').click()
        cy.get('#3').click()
        cy.get('#1').click()
        cy.get('#4').click()
        cy.get('#2').click()
        cy.get('.message').contains('¡Ganador!')
        cy.get('.winner').contains('X')
        cy.get('figure').should('have.class', 'figure-message')
    })
})