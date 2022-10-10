import HomePage from '../pages/HomePageVR'
import whereAcceptPage from '../pages/WhereAcceptVR'

describe('Page For you', () => {


  it('Validanting google maps view', () => {
    whereAcceptPage.visitPage()
    HomePage.acceptCookies()
    whereAcceptPage.buttonWheretoUseMyVRCard()
    whereAcceptPage.googleMaps()
  })
})