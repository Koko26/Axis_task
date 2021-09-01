describe('Pomofocus Test Suite', function() {
    it('Create a task', function() {
        cy.visit('https://pomofocus.io/') //Visits webpage
        cy.contains('Add Task').click() //clicks on add task
        cy.get('[placeholder="What are you working on?"]').type('testing1234') //types in the task name
        cy.wait(2000)
        //cy.contains('Save').click({force:true})
        cy.get('.sc-kIPQKe').click({force:true}) //clicks on save 
        cy.contains('Pomofocus').should('be.visible') //checks for Pomofocus Icon
        cy.contains('Login').should('be.visible') //checks for Login button
        cy.contains('Setting').should('be.visible') //checks for Settings button
        cy.contains('Tasks').should('be.visible') //checks for Tasks
        cy.get('#timer-string').should('be.visible') //asserts the timer is visible
    })

    it('Starts a task', function() {
        cy.contains('testing1234').click()
        cy.contains('START').click()
        cy.contains('STOP').should('be.visible') //asserts that the timer has started
    })

    it('Finish a task in 5 seconds', function() {
        cy.wait(5000)
        cy.contains('STOP').click()
        cy.contains('START').should('be.visible') //asserts that the timer has stopped
    })

    it('Starts a break', function() {
        cy.contains('Short Break').click()
        cy.contains('testing1234').should('be.visible') //asserts that we are on the break page
        cy.contains('START').click()
    })

    it('Finish a break', function() {
        cy.wait(5000)
        cy.contains('STOP').click()
        cy.contains('START').should('be.visible') //asserts that a break is finished
    })

    it('See the report view', function() {
        cy.contains('Report').click() //clicks on the report button
        cy.contains('Activity Summary').should('be.visible') //asserts that the report view is open
    })

})