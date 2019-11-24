describe('Should display the Homepage',  () => {
    it('It successfully loads', () => {
        cy.visit('/')
        cy.url().should('include', '/')        
    })
    it('Should load one H1 with Michi on it', () => {
        cy.visit('/')
        cy.get('h1').should('have.length', 1)
        cy.get('h1').contains('Michi')
    })
    it('Should load 2 buttons with class yellow-button', ()=>{
        cy.visit('/')
        cy.get('a').should('have.length', 2)
        cy.get('a').should('have.class', 'yellow-button')
    })
    it('Should load 2 images', ()=>{
        cy.visit('/')
        cy.get('img').should('have.length', 2)
    })
    it('Should displays /Game page when user clicks in Nueva partida', () => {
        cy.visit('/')
        cy.get('a[href*="/Game"]').click()
        cy.url().should('include', '/Game')
    })
    it('Should display /Score page when user clicks in Mejores puntajes', () => {
        cy.visit('/')
        cy.get('a[href*="/Score"]').click()
        cy.url().should('include', '/Score')
    })
})