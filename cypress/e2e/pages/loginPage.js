export class loginPage
{
    loginPage_userName = ':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(3) > #signInFormUsername';
    loginPage_passWord = ':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(5) > #signInFormPassword';
    loginPage_loginBtn = ':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > .btn';
    WGP_loginPage_titleName = '.bgp-logo-desktop'
    WGP_loginPage_loginBtn = '#login-button'


    loginToPortal(url, userName, passWord)
    {
        cy.visit(url);
        cy.get(this.loginPage_userName).type(userName);
        cy.get(this.loginPage_passWord).type(passWord);
        // cy.get(this.loginPage_loginBtn).click();
        // cy.get(this.WGP_loginPage_titleName).should('be.visible');
        // cy.get(this.WGP_loginPage_loginBtn).click()
    }

}