context('simple cypress login', () =>{
    it('login scenario', () =>{
        cy.visit('https://staging.paymi.com/users/sign_in') 
        cy.get('.register').click()   ///checking if "log in button" does not allow to log in without typing usr name & pswd
        cy.get('#user_email').type('abcd@gmail.com')  //usr email
        cy.get('#user_password').type('zaq!@WSX')  // usr pswd
        cy.get('.register').click() //login
    })
})