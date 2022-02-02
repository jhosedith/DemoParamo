class BasePage {
    //#region Metodos para extraer Element del DOM a traves de ids , xpath y clasName

    //Aca le indicamos que el campo a buscar tiene que ser visible y luego tipear el name
    setCampoVisible(name, key) {
        cy.get(key).should("be.visible").type(name);
    }

    //Aca usamos el metodo invoke para verificar que en el atributo placeholder contenga el type indicado.
    getCampoPlaceholder(type, key) {
        cy.get(key).invoke('attr', 'placeholder').should('contain', type)
    }

    //con esta expresion indicamos que el atributo no este chequeado y forzamos un check y luego verificamos que este chequeado
    setRadioButton(key) {
        cy.get(key).should('not.be.checked').check({ force: true }).should('be.checked')
    }

    getCampoNotBeChecked(key) {
        cy.get(key).should('not.be.checked');
    }

    getCampoChecked(key) {
        cy.get(key).should('be.checked');
        cy.get('.special-radio__row--small > span').should('not.be.empty')
    }

    //Con esta propiedad verificamos que el campo no este vacio.
    getCampoNotBeEmpty(key) {
        cy.get(key).should('not.be.empty')
    }

    clickCampoVisible(key) {
        cy.get(key).should('be.visible').click()
    }

    //Con esta propiedad buscamos con el xpath y verificamos que este visible
    clickCampoVisibleXpath(key) {
        cy.xpath(key).should('be.visible').click()
    }

    clickCampoVisibleForceXpath(key) {
        cy.xpath(key).should('not.be.visible').click({ force: true })
    }

    clickCampoNotVisible(key) {
        cy.get(key).should('not.be.visible').click()
    }

    getCampoContain(type, key) {
        cy.get(key).should('contain', type)
    }

    setClear(key) {
        cy.get(key).clear() // limpia campos input
    }

    clickCampoContains(key, valor) {
        cy.get(key).contains(valor).click()
    }

    clickCampoContainsForce(key, valor) {
        cy.get(key).contains(valor).click({ force: true })
    }

    clickCampo(key) {
        cy.get(key).click()
    }

    verificarCampo(key) {
        cy.get(key).should("not.exist")
    }

    clickCampoVisibleForceXpathContain(key) {
        cy.xpath(key).should('not.be.visible').click({ force: true })
    }


} //final

export default BasePage;