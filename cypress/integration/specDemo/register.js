import Registration_PO from '../../support/pageObjects/registration_PO'

require('cypress-xpath')

describe("Realizar un registro de un nuevo usuario", () => {
        //En este spec lo que hacemos es generar los casos a probar y verificar sus datos de acuerdo a los assert que buscamos.

        const master = new Registration_PO()
        it("Iniciar page Registration", () => {
            master.visitRegistration()
        })

        it("Escribir en el campo email y verificar el placeholder Email", () => {
            master.escribirEnCampoEmail("jhosedithbravo.23@gmail", "#core__protected_modules_user_yiiForm_RegistrationForm_email", 'Email')
            cy.wait(1000);
        })

        it("Seleccionar moneda USD y verificar la seleccion", () => {
            master.seleccionarRadioButtonUSD("#core__protected_modules_user_yiiForm_RegistrationForm_currency_USD")
            cy.wait(2000)
        })

        it("Escribir en el campo Password y verificar el placeholder", () => {
            master.escribirEnCampoPassword("Password123", "#core__protected_modules_user_yiiForm_RegistrationForm_password", 'Password')
            cy.get(":nth-child(2) > .pass-switch").should("be.visible").click();
            cy.wait(1000)
        })

        it("Escribir en el campo Reenter Password y verificar el placeholder", () => {
            master.escribirEnCampoPassword("Password123", "#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation", 'Reenter password')
            cy.get(":nth-child(3) > .pass-switch").should("be.visible").click();
            cy.wait(1000);
        })

        it("Escribir en el campo name y verificar el placeholder Name", () => {
            master.escribirEnName("Jhosedith", "#core__protected_modules_user_yiiForm_RegistrationForm_name", 'Name')
            cy.wait(1000);
        })

        it("Escribir en el campo Apellido y verificar el placeholder", () => {
            master.escribirEnApellido("Bravo", "#core__protected_modules_user_yiiForm_RegistrationForm_surname", 'Last name')
            cy.wait(2000);
        })

        it("Escribir en el campo Segundo Apellido y verificar el placeholder", () => {
            master.escribirEnSegundoApellido("Sanchez", "#core__protected_modules_user_yiiForm_RegistrationForm_middle_name", 'Middle name')
            cy.wait(2000)
        })

        it("Aceptar los terminos y condiciones", () => {
            //con esta funcion validamos si existe o no el valor que quiero encontrar y luego validamos que este check
            master.seleccionarCheckTermsAndCondition("#core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions")
        })

        /*it("Clickear al captcha, seleccionar el valor e insertarlo en el campo enter code", () => {
                cy.get('[data-test="control-captcha"]').should('be.visible').click({ force: true }).then((e) => {
                     cy.get('#yw2').invoke("text").then((info) => {
                         let valor = info
                         cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_captcha").should("be.visible").type(valor);
                     })
                })
            }) 
            */

        it("Verificar el check en Registration Bonus y que este la informacion completa", () => {
            master.verificarCampoBonus('#bonus-35', '.special-radio__row--small > span')
            cy.wait(2000)
        })

        it("Seleccionar el No Bonus y verificar el uncheck del Registration Bonus", () => {
            master.seleccionarNoBonus("#bonus-0", '#bonus-35')
            cy.wait(1000)
        })

        it("Seleccionar la fecha de nacimiento", () => {
            master.seleccionarBirthday('#core__protected_modules_user_yiiForm_RegistrationForm_birthday', '//*[@id="datepickers-container"]/div/div/div/div[2]')
            cy.wait(1000)
        })

        it("Escribir en el campo nickname", () => {
            master.escribirNickname("jhose", "#core__protected_modules_user_yiiForm_RegistrationForm_nickname", 'Nickname')
            cy.wait(1000);
        })

        it("Seleccionar un Pais", () => {
            master.seleccionarPais(':nth-child(20) > .selectric-wrapper > .selectric > .selectric__button', '[data-index="195"]')
            cy.wait(1000)
        })

        it("Escribir en el campo ciudad y verificar el placeholder", () => {
            //Aca en el metodo escribirCity, le estoy pasando como parametros lo que quiero escribir, con que id y cual debe ser su placeholder
            master.escribirCity("Barquis", "#core__protected_modules_user_yiiForm_RegistrationForm_city", 'City')
            cy.wait(1000);
        })

        it("Escribir en campo codigo postal y verificar el placeholder", () => {
            master.escribirCodigoPostal("12345556666666666666", "#core__protected_modules_user_yiiForm_RegistrationForm_postcode", 'Postal code')
            cy.wait(1000);
        })

        it("Seleccionar el campo gender", () => {
            master.seleccionarGender("//*[@id='registration_form_1']/fieldset[2]/div[17]/div[1]/div[3]/div/ul/li[3]")
            cy.wait(1000)
        })

        it("Ingresar login", () => {
            master.escribirLogin("login", "#core__protected_modules_user_yiiForm_RegistrationForm_username")
            cy.wait(1000);
        })

        it("Seleccionar campo Secret Question", () => {
            master.seleccionarSecretQuestion("//*[@id='registration_form_1']/fieldset[2]/div[18]/div[1]/div[3]/div/ul/li[1]")
            cy.wait(1000);
        })

        it("Seleccionar el boton Register ", () => {
            master.seleccionarRegister("[data-test='control-submit']")
            cy.wait(1000);
        })

        //En esta seccion estamos validando que para el campo EMAIL aparezca el mensaje de email invalido
        //Luego seteamos el valor correcto y verificamos que este todo ok.
        it("Verificar el mensaje de invalid Email", () => {
            master.validarMensajeError("Invalid email.", "#core__protected_modules_user_yiiForm_RegistrationForm_email_em_")
            cy.wait(1000);
        })

        it("Escribir en el campo email", () => {
            master.limpiarCampo("#core__protected_modules_user_yiiForm_RegistrationForm_email")
            master.escribirEnCampoEmail("jhosedithbravo.23@gmail.com", "#core__protected_modules_user_yiiForm_RegistrationForm_email", 'Email')
            cy.wait(1000);
        })

        it("Seleccionar el boton Register ", () => {
            master.seleccionarRegister("[data-test='control-submit']")
            cy.wait(1000);
        })


    }) //Cierre describe