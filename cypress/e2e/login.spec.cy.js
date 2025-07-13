const { log } = require("async")

describe('Orange HRM Tests', () => {

  const selectorsList = {
    username: "[name='username']",
    password: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboardGrid: ".orangehrm-dashboard-grid",
    alertContent: '.oxd-alert-content'

  }

  const userData = {
    username: 'Admin',
    password: 'admin123'
  },

   userFailureData = {
    username: 'teste',
        password: 'teste'
   }


  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.username).type(userData.username)
    cy.get(selectorsList.password).type(userData.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it ('Login - Failure', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.username).type(userFailureData.username)
    cy.get(selectorsList.password).type(userFailureData.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.alertContent)
  
  })

})