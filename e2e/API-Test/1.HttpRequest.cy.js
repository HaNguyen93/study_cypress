describe("Http request",()=>{

    it("GET call",()=>{

        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200)
    })

    it("POST call",()=>{
        cy.request( {
                    method: 'POST',
                    url: 'https://jsonplaceholder.typicode.com/posts/',
                    body:  {
                        "userId": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                         }
        })
        .its('status')
        .should('equal',201)


    })

    it("PUT call",()=>{
        cy.request( {
                    method: 'PUT',
                    url: 'https://jsonplaceholder.typicode.com/posts/1',
                    body:  {
                        
                            "userId": 1,
                            "id": 1,
                            "title": "test -sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                            "body": "test-quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                        
                         }
        })
        .its('status')
        .should('equal',200)

    })

    it("DELETE call",()=>{
        cy.request( {
                    method: 'DELETE',
                    url: 'https://jsonplaceholder.typicode.com/posts/1',
                    
        })
        .its('status')
        .should('equal',200)

    })


})