import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import Popup from 'reactjs-popup'
import {
  HeaderContainer,
  HeaderLogo,
  ThemeProfileLogout,
  ThemeButton,
  Profile,
  MenuIcon,
  MenuContainer,
  CloseButtonMenu,
  LogoutContainer,
  LogoutContent,
  LogoutCancelButton,
  LogoutConfirmButton,
  LogoutButtons,
  LogoLink,
  MenuList,
  MenuItem,
  MenuWord,
  LogoutLarge,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme, toggleTheme, activeTab, changeTab} = value
      const activeBgColor = isLightTheme ? '#cbd5e1' : '#475569'
      const bgColor = isLightTheme ? '#ffffff' : '#212121'
      const color = isLightTheme ? '#231f20' : '#ffffff'
      const MenuColor = isLightTheme ? '#ffffff' : '#212121'
      const Logout = isLightTheme ? '#cbd5e1' : '#0f0f0f'
      const logo = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      const clickChangeTheme = () => {
        toggleTheme()
      }

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

      const clickLogoutButton = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogo src={logo} alt="website logo" />
          </LogoLink>
          <ThemeProfileLogout>
            <ThemeButton
              type="button"
              onClick={clickChangeTheme}
              data-testid="theme"
            >
              {isLightTheme ? (
                <BsMoon color="#000000" size={23} />
              ) : (
                <BsBrightnessHigh color="#ffffff" size={23} />
              )}
            </ThemeButton>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <MenuIcon color={color}>
                  <GiHamburgerMenu size={23} />
                </MenuIcon>
              }
            >
              {close => (
                <MenuContainer MenuColor={MenuColor}>
                  <CloseButtonMenu
                    type="button"
                    color={color}
                    onClick={() => close()}
                  >
                    <IoMdClose size={25} />
                  </CloseButtonMenu>
                  <MenuList>
                    <LogoLink to="/">
                      <MenuItem
                        key="home"
                        ActiveColor={
                          activeTab === 'Home' ? activeBgColor : 'none'
                        }
                        onClick={clickChangeHomeTab}
                      >
                        <AiFillHome
                          size={23}
                          color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                        />
                        <MenuWord color={color}>Home</MenuWord>
                      </MenuItem>
                    </LogoLink>
                    <LogoLink to="/trending">
                      <MenuItem
                        key="trending"
                        ActiveColor={
                          activeTab === 'Trending' ? activeBgColor : 'none'
                        }
                        onClick={clickChangeTrendingTab}
                      >
                        <HiFire
                          size={23}
                          color={
                            activeTab === 'Trending' ? '#ff0b37' : '#909090'
                          }
                        />
                        <MenuWord color={color}>Trending</MenuWord>
                      </MenuItem>
                    </LogoLink>
                    <LogoLink to="/gaming">
                      <MenuItem
                        key="gaming"
                        ActiveColor={
                          activeTab === 'Gaming' ? activeBgColor : 'none'
                        }
                        onClick={clickChangeGamingTab}
                      >
                        <SiYoutubegaming
                          size={23}
                          color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                        />
                        <MenuWord color={color}>Gaming</MenuWord>
                      </MenuItem>
                    </LogoLink>
                    <LogoLink to="/saved-videos">
                      <MenuItem
                        key="saved"
                        ActiveColor={
                          activeTab === 'Saved' ? activeBgColor : 'none'
                        }
                        onClick={clickChangeSavedTab}
                      >
                        <CgPlayListAdd
                          size={23}
                          color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                        />
                        <MenuWord color={color}>Saved Videos</MenuWord>
                      </MenuItem>
                    </LogoLink>
                  </MenuList>
                </MenuContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <MenuIcon color={color}>
                  <FiLogOut size={23} />
                </MenuIcon>
              }
            >
              {close => (
                <LogoutContainer Logout={Logout}>
                  <LogoutContent>
                    Are you sure, you want to logout?
                  </LogoutContent>
                  <LogoutButtons>
                    <LogoutCancelButton type="button" onClick={() => close()}>
                      Cancel
                    </LogoutCancelButton>
                    <LogoutConfirmButton
                      type="button"
                      onClick={clickLogoutButton}
                    >
                      Confirm
                    </LogoutConfirmButton>
                  </LogoutButtons>
                </LogoutContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={<LogoutLarge type="button">Logout</LogoutLarge>}
            >
              {close => (
                <LogoutContainer Logout={Logout}>
                  <LogoutContent>Are you sure you want to logout</LogoutContent>
                  <LogoutButtons>
                    <LogoutCancelButton
                      type="button"
                      color={color}
                      onClick={() => close()}
                    >
                      Cancel
                    </LogoutCancelButton>
                    <LogoutConfirmButton
                      type="button"
                      onClick={clickLogoutButton}
                    >
                      Confirm
                    </LogoutConfirmButton>
                  </LogoutButtons>
                </LogoutContainer>
              )}
            </Popup>
          </ThemeProfileLogout>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
