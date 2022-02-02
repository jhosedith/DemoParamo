import BasePage from "./basePage";

class Tournaments_PO extends BasePage {

    visitTournaments() {
        let tiempo = 5000
        cy.visit("https://demo.casino")
        cy.wait(tiempo)
    }

    verificarOpcionNoExiste(key) {
        this.verificarCampo(key)
    }

    seleccionarOpcionTournaments(key, key2, valor) {
        this.clickCampo(key)
        this.clickCampoContains(key2, valor)
    }

    seleccionarOpcionTournamentsFinished(key2, valor) {
        this.clickCampoContains(key2, valor)
    }


}

export default Tournaments_PO;