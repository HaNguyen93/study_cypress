describe("post call",()=>{

    it("post call- hard code json object",()=>{

        const requestBody=
            {
                "name": "ha nguuyen",
                "job": "test leader"
            }

        cy.request( {

                method: 'POST',
                url: 'https://reqres.in/api/users/',
                body:requestBody

        })
        .then ((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('ha nguuyen')
            expect(response.body.job).to.eq('test leader')
        })
    
                            
    })

    it.only("post call- using data from fixture",()=>{

        cy.fixture("user_data").then((data)=>{

            const requestBody=data
            cy.request( {

                method: 'POST',
                url: 'https://reqres.in/api/users/',
                body:requestBody

        })
        .then ((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(requestBody.name)
            expect(response.body.job).to.eq(requestBody.job)

            expect(response.body).has.property('name',requestBody.name)
            expect(response.body).has.property('job',requestBody.name)
        })
        
        })
                            
    })
})