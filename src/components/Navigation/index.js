import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeContext from '../../context/ThemeContext'
import {
  NavigationContainer,
  NavigationList,
  NavigationItem,
  NavigationWord,
  ContactContainer,
  ContactUs,
  LogosCard,
  LogoImage,
  LogoLink,
  ContactWord,
} from './styledComponents'

const Navigation = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme, activeTab, changeTab} = value
      const activeBgColor = isLightTheme ? '#cbd5e1' : '#475569'
      const bgColor = isLightTheme ? '#ffffff' : '#212121'
      const color = isLightTheme ? '#231f20' : '#ffffff'
      const clickChangeTrendingTab = () => {
        changeTab('Trending')
      }

      const clickChangeGamingTab = () => {
        changeTab('Gaming')
      }

      const clickChangeHomeTab = () => {
        changeTab('Home')
      }

      const clickChangeSavedTab = () => {
        changeTab('Saved')
      }
      return (
        <NavigationContainer bgColor={bgColor}>
          <NavigationList>
            <LogoLink to="/">
              <NavigationItem
                key="home"
                ActiveColor={
                  activeTab === 'Home' ? activeBgColor : 'transparent'
                }
                onClick={clickChangeHomeTab}
              >
                <AiFillHome
                  size={23}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
                <NavigationWord color={color}>Home</NavigationWord>
              </NavigationItem>
            </LogoLink>
            <LogoLink to="/trending">
              <NavigationItem
                key="trending"
                ActiveColor={
                  activeTab === 'Trending' ? activeBgColor : 'transparent'
                }
                onClick={clickChangeTrendingTab}
              >
                <HiFire
                  size={23}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
                <NavigationWord color={color}>Trending</NavigationWord>
              </NavigationItem>
            </LogoLink>
            <LogoLink to="/gaming">
              <NavigationItem
                key="gaming"
                ActiveColor={
                  activeTab === 'Gaming' ? activeBgColor : 'transparent'
                }
                onClick={clickChangeGamingTab}
              >
                <SiYoutubegaming
                  size={23}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
                <NavigationWord color={color}>Gaming</NavigationWord>
              </NavigationItem>
            </LogoLink>
            <LogoLink to="/saved-videos">
              <NavigationItem
                key="saved"
                ActiveColor={
                  activeTab === 'Saved' ? activeBgColor : 'transparent'
                }
                onClick={clickChangeSavedTab}
              >
                <CgPlayListAdd
                  size={23}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
                <NavigationWord color={color}>Saved Videos</NavigationWord>
              </NavigationItem>
            </LogoLink>
          </NavigationList>
          <ContactContainer>
            <ContactUs color={color}>CONTACT US</ContactUs>
            <LogosCard>
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogosCard>
            <ContactWord color={color}>
              Enjoy! Now to see your channels and recommendations!
            </ContactWord>
          </ContactContainer>
        </NavigationContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navigation
