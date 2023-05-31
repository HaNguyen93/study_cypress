//pre-requisite: generate auth code
//https://github.com/login/oauth/authorize?{client_id}
//ex: https://github.com/login/oauth/authorize?client_id=6622f8e44b0af46ec829
/*
step 1: get the  oauth2  accesss token
POST: https://github.com/login/oauth/access_token

query param:
- client_id
- client_secret
-code 
step 2: send Get request by using access token
GET: htpps://api.github.com/user/repos
Auth: access token
*/
describe("Oauth2 testing",()=>{
    let access_token;

    it("get the  oauth2  accesss token",()=>{
        cy.request({
            method:'POST',
            url:'https://github.com/login/oauth/access_token',
            qs:{
                client_id:'6622f8e44b0af46ec829',
                client_secret:'6444e5f1349655dbc0a9db8283b9d2d9e36eb2b0',
                code:'7919a0bf14b8cabfc199'
            }
        }).then((response)=>{
            //results body: access_token=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&scope=&token_type=bearer
            const ob=response.body.split('&')
            access_token=ob[0].split('=')[1]
            cy.log("token is: "+access_token)
        })
    })

    it("send Get request by using access token",()=>{
        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Authorization:'Bearer '+access_token
               
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    })
})