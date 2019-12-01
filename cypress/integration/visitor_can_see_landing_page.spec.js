import { finished } from "stream";

describe('Visitor can see all pages', () => {
    it('visitor can see content when loading landing page', () => {
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

        cy.get(".ui.card").contains("BMI Calculator").click()
    });

    it('visitor can see content on resume page', () => {
        cy.visit('/')

        cy.get("nav").contains("Resume").click()

        cy.get(".column")
            .should("contain", "Resumé")

        cy.get(".ui.main.container.fade-enter-done")
            .should("contain", "to continue")
            
        cy.get(".centerText").contains("My Working Life")

        cy.get(".column").find("img").should("be.visible")

        cy.get(".ui.card").should("have.length", 3)
    
    });
})
