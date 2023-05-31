describe(" api test",()=>{
    it("basic auth",()=>{

        cy.request({
            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                'username':'postman',
                'password':'password'
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.authenticated).to.equal(true)
        })
    })

    it("digest auth",()=>{

        cy.request({
            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                'username':'postman',
                'password':'password',
                 method:'degest'
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.authenticated).to.equal(true)
        })
    })

    const bearer_token='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'
    it("bearer token",()=>{

        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Authorization:'Bearer '+bearer_token
            }
            
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body[0].id).to.equal(172880134)
        })
    })

    it.only("API key ",()=>{

        cy.request({
            method:'GET',
            url:'https://api.openweathermap.org/data/2.5/weather',
            qs:{
                q:'London',
                appid:'bf65d00e699796724d8bd5745fcee551'
            }
            
        }).then((response)=>{
            expect(response.status).to.equal(200)
           // expect(response.body[0].id).to.equal(172880134)
        })
    })

})