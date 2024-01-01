// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  start = {
    isDarkMode: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const specialClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="main-container">
        <div className={`container ${specialClassName}`}>
          <h1 className="heading">Click to change the mode</h1>
          <button onClick={this.onClickButton} type="button" className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
