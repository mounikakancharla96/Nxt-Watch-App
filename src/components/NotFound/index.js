import Header from '../Header'
import Navigation from '../Navigation'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme} = value
      const bgColor = isLightTheme ? '#f9f9f9' : '#0f0f0f'
      const textColor = isLightTheme ? '#231f20' : '#ffffff'

      const failureImage = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <Navigation />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundImage src={failureImage} alt="not found" />
            <NotFoundHeading textColor={textColor}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundDescription>
              We are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
