class HomeVrPage{

    acceptCookies() {
        cy.get('.lum-first').click()
    }
}

export default new HomeVrPage