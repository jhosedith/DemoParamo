import Tournaments_PO from "../../support/pageObjects/tournaments_PO"

describe("Ingresar a tournaments y verificar el estado finished", () => {

    const master = new Tournaments_PO()
    it("Iniciar page DemoCasino", () => {
        master.visitTournaments()
    })

    it("Seleccionar la opcion Tournaments", () => {

        if (cy.get(".icon-mobile-menu").should('exist')) {
            master.seleccionarOpcionTournaments(".icon-mobile-menu", ".quick-links-menu__item > a", "Tournaments")
        } else {
            master.seleccionarOpcionTournaments(".header-menu-main__item > a", "Tournaments")
        }
        cy.wait(2000)
    })

    it("Seleccionar la opcion Tournaments Finished", () => {
        master.seleccionarOpcionTournamentsFinished(".last", "Finished")
    })

    it("Seleccionar la opcion Tournaments pending not found", () => {
        master.seleccionarOpcionTournamentsFinished(".selectric-scroll > ul", "Pending")
        master.seleccionarOpcionTournamentsFinished(".active > .empty > h3", "Tournaments not found")
    })

})