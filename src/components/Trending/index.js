import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import Navigation from '../Navigation'
import TrendingVideoCard from '../TrendingVideoCard'
import FailureView from '../FailureView'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingViewContainer,
  TrendingHeadingContainer,
  FireIconContainer,
  TrendingHeading,
  TrendingVideosList,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    console.log(response)

    console.log(response)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channelName: eachVideo.channel.name,
        channelProfileUrl: eachVideo.channel.profile_image_url,
        viewsCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))

      console.log(updatedData)

      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state

    return (
      <TrendingVideosList>
        {trendingVideos.map(eachVideo => (
          <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideosList>
    )
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderAllDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      case apiStatusConstants.failure:
        return this.FailureView()
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
          const fireIconBgColor = isLightTheme ? '#d7dfe9' : '#0f0f0f'
          return (
            <>
              <Header />
              <Navigation />
              <TrendingViewContainer data-testid="trending" bgColor={bgColor}>
                <TrendingHeadingContainer headingBgColor={headingBgColor}>
                  <FireIconContainer fireIconBgColor={fireIconBgColor}>
                    <HiFire size="35" color="#ff0000" />
                  </FireIconContainer>
                  <TrendingHeading textColor={textColor}>
                    Trending
                  </TrendingHeading>
                </TrendingHeadingContainer>
                {this.renderAllDetails()}
              </TrendingViewContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
