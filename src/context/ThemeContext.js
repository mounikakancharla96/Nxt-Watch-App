import React from 'react'

const ThemeContext = React.createContext({
  isLightTheme: true,
  activeTab: 'Home',
  savedVideos: [],
  toggleTheme: () => {},
  changeTab: () => {},
  addVideoItem: () => {},
})

export default ThemeContext
