import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import Navigation from '../Navigation'
import GamingVideoCard from '../GamingVideoCard'
import FailureView from '../FailureView'

import ThemeContext from '../../context/ThemeContext'

import {
  GamingMainContainer,
  GamingHeadingContainer,
  GamingIconContainer,
  GamingHeading,
  GamingCardsList,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamesList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamesList()
  }

  getGamesList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    console.log(response)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachGame => ({
        id: eachGame.id,
        title: eachGame.title,
        thumbnailUrl: eachGame.thumbnail_url,
        viewCount: eachGame.view_count,
      }))

      console.log(updatedData)

      this.setState({
        gamesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.getGamesList()
  }

  renderGamingCardList = () => {
    const {gamesList} = this.state

    return (
      <GamingCardsList>
        {gamesList.map(eachGame => (
          <GamingVideoCard key={eachGame.id} gameDetails={eachGame} />
        ))}
      </GamingCardsList>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderAllDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingCardList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value

          const bgColor = isLightTheme ? '#f9f9f9' : '#0f0f0f'
          const textColor = isLightTheme ? '#231f20' : '#ffffff'
          const headingBgColor = isLightTheme ? '#ebebeb' : '#231f20'
          const gameIconBgColor = isLightTheme ? '#d7dfe9' : '#0f0f0f'
          return (
            <>
              <Header />
              <Navigation />
              <GamingMainContainer data-testid="gaming" bgColor={bgColor}>
                <GamingHeadingContainer headingBgColor={headingBgColor}>
                  <GamingIconContainer gameIconBgColor={gameIconBgColor}>
                    <SiYoutubegaming size="35" color="#ff0000" />
                  </GamingIconContainer>
                  <GamingHeading textColor={textColor}>Gaming</GamingHeading>
                </GamingHeadingContainer>
                {this.renderAllDetailsView()}
              </GamingMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
