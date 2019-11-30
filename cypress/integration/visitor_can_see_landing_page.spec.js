describe('Visitor can see landing page', () => {
    it('visitor can see content when loading the page', () => {
        cy.visit('/')

        cy.get("nav")
            .should("contain", "About Me")
            .and("contain", "Projects")
            .and("contain", "Portfolio")
            .and("contain", "Resume")

        cy.get(".ui.main.container")
            .should("contain", "Welcome.")
    });

    it('visitor can see content on projects page', () => {
        cy.visit('/')

        cy.get("nav").within(() => {
            cy.contains("Projects").click()
        })

        cy.get(".ui.card").should("have.length", 4)

        cy.get(".ui.card")
            .should("contain", "BMI Calculator")
            .and("contain", "FizzBuzz")
            .and("contain", "Address Book")
            .and("contain", "Unavailable")
    });
})
