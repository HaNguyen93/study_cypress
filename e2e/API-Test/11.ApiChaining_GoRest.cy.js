//POST:https://gorest.co.in/public/v2/users
//PUT:https://gorest.co.in/public/v2/users/${userId}
//DELETE:https://gorest.co.in/public/v2/users/${userId}


describe("api chaining",()=>{
    let auth_token="Bearer b8e827d625704e5fdd62eedb1e82916f49dc1665ec149881ba25d53efe919d0f"

    it("create, update,delete in Gorest API",()=>{

    cy.request({
        method:'POST',
        url:'https://gorest.co.in/public/v2/users',
        qs:{
            name:"hantn",
            email: Math.random().toString(5).substring(2)+"@gmail.com",
            gender:"female",
            status:"inactive"       
        },
        headers:{
            Authorization:auth_token
        }
    }).then((response)=>{
        expect(response.status).to.equal(201)
        const userid=response.body.id
        //update user
        cy.request({
            method: 'PUT',
            url:`https://gorest.co.in/public/v2/users/${userid}`,
            body:{
                name:'hantn123'
            },
            headers:{
                Authorization:auth_token
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal('hantn123')
            //delete user
            cy.request({
                method:'DELETE',
                url:`https://gorest.co.in/public/v2/users/${userid}`,
                headers:{
                    Authorization:auth_token
                }
            }).then((response)=>{
                expect(response.status).to.equal(204)

            })
        })
    })

    })
})