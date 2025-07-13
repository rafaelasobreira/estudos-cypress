const { log } = require("async")

describe('Orange HRM Tests', () => {

  const selectorsList = {
    username: "[name='username']",
    password: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    alertContent: '.oxd-alert-content'

  }

  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.username).type('Admin')
    cy.get(selectorsList.password).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).should('contain', 'Dashboard')
  })
  it ('Login - Failure', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.username).type('Admin')
    cy.get(selectorsList.password).type('wrongpassword')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.alertContent)
  
  })

})