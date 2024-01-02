/// <reference types="cypress" />
let Chance = require('chance');
let chance = new Chance;

describe('Login', () => {
    it('Cadastrar um novo usuário', () => {
        cy.visit('login');
        cy.get('input[name="name"]').type('Alex Borelli');
        cy.get('input[data-qa="signup-email"]').type(chance.email());
        cy.get('button[data-qa="signup-button"]').click();

        cy.url().should('contain', 'signup');

        cy.get('input#id_gender1').check();
        cy.get('input#password').type('teste1234');
        // Data
        cy.get('select#days').select('12');
        cy.get('select#months').select('July');
        cy.get('select#years').select('1979');
        cy.get('input#first_name').type('Alex');
        cy.get('input#last_name').type('Borelli');
        cy.get('input#company').type('Arpa');
        cy.get('input#address1').type('Rua Guara, 123 - 302');
        cy.get('input#address2').type('Itaiba');

        // Combo Country
        cy.get('select#country').select('Australia', { force: true });
        cy.get('input#state').type('Santa Catarina');
        cy.get('input#city').type('Concordia');
        cy.get('input#zipcode').type('89703-078');
        cy.get('input#mobile_number').type('34424242');
        cy.get('button[data-qa="create-account"]').click();

        cy.url().should('contain', 'account_created');

        cy.get('h2[data-qa=account-created]').should('have.text', 'Account Created!')

    });
});