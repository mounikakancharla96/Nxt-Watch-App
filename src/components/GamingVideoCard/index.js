import {
  GameCard,
  GameThumbnailImage,
  GameTitle,
  GameViews,
  GameLink,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const GamingVideoCard = props => {
  const {gameDetails} = props

  const {id, title, thumbnailUrl, viewCount} = gameDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value

        const textColor = isLightTheme ? '#231f20' : '#ffffff'
        return (
          <GameLink to={`/videos/${id}`}>
            <GameCard>
              <GameThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle textColor={textColor}>{title}</GameTitle>
              <GameViews>{viewCount} Watching Worldwide</GameViews>
            </GameCard>
          </GameLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoCard
