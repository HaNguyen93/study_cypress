import Login from "../PageObjects/LoginPage2.js"
describe("using POM- page object model pattern",()=>{
/*
    it("login without POM",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')
    })
*/
    it.skip("login using POM- without fixture",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            const ln=new Login()
            ln.setUserName("Admin")
            ln.setPassword("admin123")
            ln.clickSubmit()
            ln.verifyLogin("Dashboard")

        })


        it("login using POM- with fixture",()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
           
            cy.fixture("OrangeHRM1.json").then( (data)=>{
    
                const ln=new Login()
                ln.setUserName(data.username)
                ln.setPassword(data.password)
                ln.clickSubmit()
                ln.verifyLogin(data.expected)
    
            })

    })
    
})