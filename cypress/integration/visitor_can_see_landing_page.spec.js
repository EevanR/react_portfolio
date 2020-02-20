import { finished } from "stream";

describe('Visitor can see all pages', () => {
    it('visitor can see content when loading landing page', () => {
        cy.visit('/')

        cy.get("nav")
            .should("contain", "ABOUT")
            .and("contain", "PROJECTS")
            .and("contain", "Resume")

        cy.get(".hello-parallax-div")
            .should("contain", "Eevan Redon")
    });

    it('visitor can see content on projects page', () => {

        cy.get("nav").within(() => {
            cy.contains("PROJECTS").click()
            cy.wait(1000)
        })

        cy.get(".ui.card").should("have.length", 5)

        cy.get(".ui.card")
            .should("contain", "TripWiz")
            .and("contain", "The Reactive Herald")
            .and("contain", "Cooper")
    });

    it('visitor can see content on about page', () => {

        cy.get("nav").contains("ABOUT").click()
        cy.get(".skills-desc").should('contain', 'Collaboration')
    });
})
