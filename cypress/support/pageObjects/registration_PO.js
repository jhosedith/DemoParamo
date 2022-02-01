import BasePage from "./basePage";

class Registration_PO extends BasePage {

    visitRegistration() {
        let tiempo = 5000
        cy.visit("https://demo.casino/user/registration")
        cy.wait(tiempo)
    }

    escribirEnCampoEmail(name, key, type) {
        this.setCampoVisible(name, key)
        this.getCampoPlaceholder(type, key)
    }

    escribirEnCampoPassword(name, key, type) {
        this.setCampoVisible(name, key)
        this.getCampoPlaceholder(type, key)
    }

    escribirEnCampoReenterPassword(name, key, type) {
        this.setCampoVisible(name, key)
        this.getCampoPlaceholder(type, key)
    }

    escribirEnName(name, key, type) {
        this.setCampoVisible(name, key)
        this.getCampoPlaceholder(type, key)
    }

    escribirEnApellido(name, key, type) {
        this.setCampoVisible(name, key)
        this.getCampoPlaceholder(type, key)
    }

    escribirEnSegundoApellido(name, key, type) {
        this.setCampoVisible(name, key)
        this.getCampoPlaceholder(type, key)
    }

    escribirNickname(name, key, type) {
        this.setCampoVisible(name, key)
        this.getCampoPlaceholder(type, key)
    }

    escribirCity(name, key, type) {
        this.setCampoVisible(name, key)
        this.getCampoPlaceholder(type, key)
    }

    escribirCodigoPostal(name, key, type) {
        this.setCampoVisible(name, key)
        this.getCampoPlaceholder(type, key)
    }

    escribirLogin(name, key) {
        this.setCampoVisible(name, key)
    }

    seleccionarRadioButtonUSD(key) {
        this.setRadioButton(key)
    }

    seleccionarCheckTermsAndCondition(key) {
        this.setRadioButton(key)
    }

    seleccionarNoBonus(key, key2) {
        this.setRadioButton(key)
        this.getCampoNotBeChecked(key2)

    }

    verificarCampoBonus(key, key2) {
        this.getCampoChecked(key)
        this.getCampoNotBeEmpty(key2)
    }

    seleccionarBirthday(key, key2) {
        this.clickCampoVisible(key)
        this.clickCampoVisibleXpath(key2)
    }

    seleccionarPais(key, key2) {
        this.clickCampoVisible(key)
        this.clickCampoNotVisible(key2)
    }

    seleccionarGender(key) {
        this.clickCampoVisibleForceXpath(key)
    }

    seleccionarSecretQuestion(key) {
        this.clickCampoVisibleForceXpath(key)
    }

    seleccionarRegister(key, key2) {
        this.clickCampoVisible(key)
    }

    validarMensajeError(type, key) {
        this.getCampoContain(type, key)
    }

    limpiarCampo(key) {
        this.setClear(key)
    }
} //final

export default Registration_PO;