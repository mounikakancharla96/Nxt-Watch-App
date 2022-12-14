import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'
import './App.css'

class App extends Component {
  state = {isLightTheme: true, activeTab: 'Home', savedVideos: []}

  toggleTheme = () => {
    this.setState(prevState => ({isLightTheme: !prevState.isLightTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideoItem = video => {
    const {savedVideos} = this.state

    const videoIndex = savedVideos.findIndex(
      eachVideo => eachVideo.id === video.id,
    )

    if (videoIndex === -1) {
      this.setState({
        savedVideos: [...savedVideos, video],
      })
    } else {
      savedVideos.splice(videoIndex, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {isLightTheme, activeTab, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isLightTheme,
          activeTab,
          savedVideos,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideoItem: this.addVideoItem,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
