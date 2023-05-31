describe("fixture",()=>{

    /*
it("test data without fixture",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')

}) */

it.skip("test data without fixture- 1 block",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //get data from file data json
    cy.fixture("OrangeHRM1.json").then( (data)=>{
        cy.get("input[placeholder='Username']").type(data.username)
        cy.get("input[placeholder='Password']").type(data.password)
        cy.get("button[type='submit']").click()
    
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',data.expected)

    })

})

let userdata
before(()=>{
    cy.fixture("OrangeHRM1.json").then( (data)=>{
        userdata=data
    })
})

it("test data without fixture- 2 block",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
    
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected)

})

})