import {
  LinkItem,
  VideoCardItem,
  ThumbnailImage,
  VideoItemContent,
  VideoChannelLogo,
  VideoItemDetails,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const TrendingVideoCard = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    viewsCount,
    publishedAt,
    channelProfileUrl,
  } = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value

        const textColor = isLightTheme ? '#231f20' : '#ffffff'
        return (
          <LinkItem to={`/videos/${id}`}>
            <VideoCardItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoItemContent>
                <VideoChannelLogo src={channelProfileUrl} alt="channel logo" />
                <VideoItemDetails>
                  <VideoTitle textColor={textColor}>{title}</VideoTitle>
                  <ChannelName>{channelName}</ChannelName>
                  <ViewsAndDate>
                    {viewsCount} views <Dot>&#8226;</Dot> {publishedAt}
                  </ViewsAndDate>
                </VideoItemDetails>
              </VideoItemContent>
            </VideoCardItem>
          </LinkItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoCard
