import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import Navigation from '../Navigation'
import TrendingVideoCard from '../TrendingVideoCard'
import {
  SavedVideosContainer,
  SavedVideosHeadingContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
  SavedVideoList,
  NoSavedVideosView,
  NoSavedImage,
  NoSavedHeading,
  NoSavedDescription,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const SavedVideos = () => (
  <ThemeContext>
    {value => {
      const {isLightTheme, savedVideos} = value

      const bgColor = isLightTheme ? '#f9f9f9' : '#0f0f0f'
      const textColor = isLightTheme ? '#231f20' : '#ffffff'
      const headingBgColor = isLightTheme ? '#ebebeb' : '#231f20'
      const savedIconBgColor = isLightTheme ? '#d7dfe9' : '#0f0f0f'

      const renderSavedVideos = () => {
        const isVideosSaved = savedVideos.length

        return isVideosSaved > 0 ? (
          <SavedVideoList data-testid='savedVideos'>
            {savedVideos.map(eachVideo => (
              <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </SavedVideoList>
        ) : (
          <NoSavedVideosView>
            <NoSavedImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedHeading textColor={textColor}>
              No saved videos found
            </NoSavedHeading>
            <NoSavedDescription>
              You can save your videos while watching them
            </NoSavedDescription>
          </NoSavedVideosView>
        )
      }

      return (
        <>
          <Header />
          <Navigation />
          <SavedVideosContainer data-testid='savedVideos' bgColor={bgColor}>
            <SavedVideosHeadingContainer headingBgColor={headingBgColor}>
              <SavedVideosIconContainer savedIconBgColor={savedIconBgColor}>
                <CgPlayListAdd size="35" color=" #ff0000" />
              </SavedVideosIconContainer>
              <SavedVideosHeading textColor={textColor}>
                Saved Videos
              </SavedVideosHeading>
            </SavedVideosHeadingContainer>
            {renderSavedVideos()}
          </SavedVideosContainer>
        </>
      )
    }}
  </ThemeContext>
)

export default SavedVideos
