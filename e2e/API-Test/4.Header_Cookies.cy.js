describe("api test",()=>{

    let AuthenToken

    before("creating access token",()=>{
        cy.request({

            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: {
                'Content-Type':'application/json'
            },
            body: {
                "clientName":"ABC",
                "clientEmail": Math.random().toString(5).substring(2)+"@gmail.com"
            }

        }).then( (response)=>{
            AuthenToken= response.body.accessToken

        })

    })

    before( "create an order",()=>{
        cy.request( {
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer '+AuthenToken

            },
            body:{
                "bookId": 1,
                "customerName":"hantn"

                }
        }).then( (response)=>{

            expect(response.status).equal(201)
            expect(response.body.created).equal(true)
            

        })

    })

    it("fetching order",()=>{

        cy.request( {
            method:'GET',
            url: 'https://simple-books-api.glitch.me/orders',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer '+AuthenToken

            },
            cookies:{
                'cookieName':'mycookies'
            }
        }).then( (response)=>{
            expect(response.status).equal(200)
            expect(response.body).has.length(1)
           
        })
    })



    
})