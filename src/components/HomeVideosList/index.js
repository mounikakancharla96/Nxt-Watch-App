import {
  VideoCardContainer,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  RetryButton,
} from './styledComponents'
import HomeVideoCard from '../HomeVideoCard'

import ThemeContext from '../../context/ThemeContext'

const HomeVideosList = props => {
  const {homeVideos, onRetry} = props

  const videosCards = homeVideos.length

  const onClickRetryButton = () => {
    onRetry()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const headingColor = isLightTheme ? '#1e293b' : '#f1f5f9'
        const noteColor = isLightTheme ? '#475569' : '#e2e8f0'

        return videosCards > 0 ? (
          <VideoCardContainer>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </VideoCardContainer>
        ) : (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosDescription noteColor={noteColor}>
              Try different key words or remove search filter
            </NoVideosDescription>
            <RetryButton type="button" onClick={onClickRetryButton}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideosList
