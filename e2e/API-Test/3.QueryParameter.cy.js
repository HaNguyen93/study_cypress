describe("api test", ()=>{
    const QueryParam= {page:2}

    it("query parameter",()=>{
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users',   //https://reqres.in/api/users?page=2
            qs:  QueryParam                       //query parameter: {page:2}  
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.status).equal(200)

            expect(response.body.page).equal(2)
            expect(response.body.total_pages).equal(2)
            expect(response.body.data).has.length(6)
            
            expect(response.body.data[0]).have.property('id',7)
            expect(response.body.data[0]).have.property('first_name','Michael')
        })
    })
    
})