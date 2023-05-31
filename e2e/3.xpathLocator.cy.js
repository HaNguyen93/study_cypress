
describe("xpath",()=>{

it("test xpath",()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.xpath("//input[@placeholder='Password']").should('have.length',1)

})

   
})