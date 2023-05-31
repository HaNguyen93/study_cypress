describe("test suite",()=>{

    it("screenshot and video",()=>{
        cy.visit("https://demo.opencart.com/")
      /*  
        cy.screenshot("homepage")
        cy.wait(5000)

        cy.get("img[title='Your Store']").screenshot("logo")
        */

        //automatically capture video and screenshot on failure -only when excute through CLI
        cy.get("li:nth-child(7) a:nth-child(1)").click()// camera
        cy.get("div[id='content'] h2").should('have.text','Tables')
        
    })
})