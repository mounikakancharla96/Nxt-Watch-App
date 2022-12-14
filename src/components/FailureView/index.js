import {
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetryButton = () => {
    onRetry()
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value

        const headingColor = isLightTheme ? '#1e293b' : '#f1f5f9'
        const noteColor = isLightTheme ? '#475569' : '#e2e8f0'

        const failureImgUrl = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureViewImage src={failureImgUrl} alt="failure view" />
            <FailureHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription noteColor={noteColor}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <FailureButton type="button" onClick={onClickRetryButton}>
              Retry
            </FailureButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
