describe('[+] вход с верным логином и паролем', function () {
    
    it('захожу на сайт стаи и вхожу в свой профиль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('polina.v.ponomareva@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('iloveqastudiopolinaP4');
        cy.get('.auth-form__submit').click()
        cy.contains('Мои заказы')
        })
});

describe('[-] вход с верным логином и неверным паролем', function () {
    
    it('захожу на сайт стаи и вхожу в профиль с неверным паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('polina.v.ponomareva@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('iloveqastudiopolinaP54');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы')
        })
});

describe('[+] выход из аккаунта', function () {
    
    it('захожу на сайт стаи  и выхожу', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('polina.v.ponomareva@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('iloveqastudiopolinaP4');
        cy.get('.auth-form__submit').click();
        cy.contains('Выйти из аккаунта');
        cy.get('button.profile__nav-link').click();
        cy.contains('Ты уверен, что хочешь выйти из аккаунта?');
        cy.get('.box__button_ok').click
    })

        })


    


        
