class WhereAccept{

    visitPage() {
        cy.visit('/onde-aceita.htm')
    }

    buttonWheretoUseMyVRCard() {
        cy.get('.vr-hero__actions > .vr-button--negative').click()
    }

    googleMaps() {
        cy.get('a > div > img').should('be.visible')
        cy.get('.main-section #map .gm-style')
            .should('be.visible')
            .screenshot('Google Maps Visible')
    }
}

export default new WhereAccept