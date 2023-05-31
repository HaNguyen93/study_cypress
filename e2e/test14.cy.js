describe('DataDrivenTestSuite', ()=>{
    // Data Driven Test
    it('DataDrivenTest', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // get data from json file
        cy.fixture("OrangeHRM2.json").then( (data)=>{
            data.forEach( (userdata)=>{
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click();
                cy.wait(1000)

                if(userdata.username == 'Admin' && userdata.password=="admin123"){
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                        .should('have.text', userdata.expected);
                    //logout
                    cy.get(".oxd-userdropdown-tab > .oxd-icon").click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); // logout in dropdown
                }else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should('have.text', userdata.expected);
                }
            })
        })
    })
})