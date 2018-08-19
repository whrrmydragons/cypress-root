const faker = require('faker');

describe("Create User",()=>{
    it("register",()=>{
        cy.visit('http://localhost:3002');

        cy.get('.or-register > .ng-binding').click() // go to register form
        cy.wait(1000);
        let name = cy.get(':nth-child(2) > .form-control')
        name.type(faker.name.title(),{force:true});
        let email = cy.get(':nth-child(3) > .form-control');
        email.type(faker.internet.email());
        let username = cy.get(':nth-child(4) > .form-control');
        username.type(faker.internet.userName());
        let password = cy.get(':nth-child(5) > .form-control');
        password.type('password');
        let confirmation = cy.get(':nth-child(6) > .form-control');
        confirmation.type('password');
        cy.get('.btn').click()// register

    })
})
