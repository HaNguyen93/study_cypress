
describe('demo assertion',()=>{

it('implicit assertion',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //should   and

/*  cy.url().should('include','orangehrmlive.com')
    cy.url().should('contain','orangehrm')
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 */
 /*   cy.url().should('include','orangehrmlive.com')
            .should('contain','orangehrm')
            .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
*/
    cy.url().should('include','orangehrmlive.com')
            .and('contain','orangehrm')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('not.contain','hantnhrm')

    cy.title().should('include','Orange')
                .and('eq','OrangeHRM')
                .and('contain','OrangeHRM')
    
    cy.xpath("//img[@alt='company-branding']").should('be.visible') //logo visible
        .and('exist') //logo exist

    cy.xpath("//a").should('have.length',5) //number of link

    cy.xpath("//input[@placeholder='Username']").type('Admin')
    cy.xpath("//input[@placeholder='Username']").should('have.value','Admin')

})

it('Explicit assertion',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[name='username']").type("Admin")
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()

    let ExpName="john johson";

    cy.get(".oxd-userdropdown-name").then( (x)=>{

        let ActName=x.text()
        expect(ActName).to.equal(ExpName)
        expect(ActName).to.not.equal(ExpName)

    }
    )


    



})


})