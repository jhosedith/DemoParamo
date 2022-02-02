class BasePage {

    setCampoVisible(name, key) {
        cy.get(key).should("be.visible").type(name);
    }

    getCampoPlaceholder(type, key) {
        cy.get(key).invoke('attr', 'placeholder').should('contain', type)
    }

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

    getCampoNotBeEmpty(key) {
        cy.get(key).should('not.be.empty')
    }

    clickCampoVisible(key) {
        cy.get(key).should('be.visible').click()
    }

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