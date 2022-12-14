import {
  VideoCardItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImgAndTitle,
  ProfileImage,
  Title,
  ChannelAndDateContainer,
  ChannelName,
  ViewsCountAndDate,
  Dot,
  NavLink,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const textColor = isLightTheme ? '#231f20' : '#f9f9f9'
        return (
          <NavLink to={`/videos/${id}`}>
            <VideoCardItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImgAndTitle>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                  <Title textColor={textColor}>{title}</Title>
                </ProfileImgAndTitle>
                <ChannelAndDateContainer>
                  <ChannelName textColor={textColor}>{name}</ChannelName>
                  <ViewsCountAndDate textColor={textColor}>
                    {viewCount} views
                    <Dot>&#8226;</Dot> {publishedAt}
                  </ViewsCountAndDate>
                </ChannelAndDateContainer>
              </VideoDetails>
            </VideoCardItem>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideoCard
