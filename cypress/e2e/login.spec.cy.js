import userData from '../fixtures/userData.json'

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

 
  it('Login Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.username).type(userData.userSucess.username)
    cy.get(selectorsList.password).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it ('Login - Failure', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.username).type(userData.userFailureData.username)
    cy.get(selectorsList.password).type(userData.userFailureData.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.alertContent)
  
  })

})