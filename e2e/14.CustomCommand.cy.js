describe("custom command",()=>{

    it("handle link",()=>{
        //add new custom command in 'support/commands.js

        cy.visit("https://demo.nopcommerce.com/")

        //without custom command
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        //cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')

        //with custom command
        cy.ClickLink('Apple MacBook Pro 13-inch')
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })

    
    it.skip("overwriting existing command", ()=>{
        //chưa chạy được
        cy.visit("https://demo.nopcommerce.com/");
        cy.ClickLink('APPLE MacBook Pro 13-inch');  // with contains overwritten and working
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch'); 
    })

    it("custom command login",()=>{

        cy.visit("https://demo.nopcommerce.com/")
        cy.ClickLink("Log in")
        cy.Loginwebsite("testing@gmail.com","test123")

    })


})