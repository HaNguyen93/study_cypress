describe("go and reload",()=>{

    it("mytest",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq','Your Store')//home

        cy.get("li:nth-child(7) a:nth-child(1)").click()// camera
        cy.get("div[id='content'] h2").should('have.text','Cameras')

        cy.go('back');// back to home
        cy.title().should('eq','Your Store')//home

        cy.go('forward') // go to camera
        cy.get("div[id='content'] h2").should('have.text','Cameras')

        cy.go(-1);// back to home
        cy.title().should('eq','Your Store')//home

        cy.go(1) // go to camera
        cy.get("div[id='content'] h2").should('have.text','Cameras')

    })
})