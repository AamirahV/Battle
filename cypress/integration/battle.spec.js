describe("Battle", function(){
    it("Can see the players names", function(){
        cy.visit('/')
        cy.get('#header').should('contain', "Battle")
        cy.get('#welcome').should('contain', 'Welcome, please enter your names')
        cy.get('#p1Name').type("Aamirah")
        cy.get('#p2Name').type("Rawdah")
        cy.get('#submitButton').click()
        cy.get('#displayNames').should('contain', "Aamirah", "Rawdah")
    })
})