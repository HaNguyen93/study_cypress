describe('MyTestSuite', () =>{
    before( ()=>{
        cy.log('******** Launch App ********');
    })

    after( ()=>{
        cy.log('******** Close App ********');
    })

    beforeEach( ()=>{
        cy.log('********** Login ************');
    })

    afterEach( ()=>{
        cy.log('********* Logout   *************');
    })

    it('search', ()=>{
        cy.log('********* Search   *************');
    })

    it('advanced search', ()=>{
        cy.log('********* Advanced Search   *************');
    })

    it('listing products', ()=>{
        cy.log('********* Listing Products   *************');
    })
})
