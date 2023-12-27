import {Componet} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordListItem from '../PasswordListItem'
import './index.css'

class PasswordManager extends Componet {
  state = {
    count: 0,
    passwordsList: [],
    userName: '',
    website: '',
    password: '',
    isCheckboxClicked: false,
  }

  onAddPassword = () => {
    const {passwordsList, userName, website, password, count} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      userName,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      userName: '',
      password: '',
      count: prevState.count + 1,
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({
      isCheckboxClicked: !prevState.isCheckboxClicked,
    }))
  }

  render() {
    const {count, passwordsList, isCheckboxClicked} = this.state

    return (
      <>
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="img"
            alt="app logo"
          />
          <div className="card-container">
            <div className="input-container">
              <h1 className="title">Add New Password</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="img"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="img"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="img"
                alt="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
              />
              <button
                type="button"
                className="buuton"
                onClick={this.onAddPassword}
              >
                Add
              </button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="img"
              />
            </div>
          </div>
        </div>
        <div className="results-container">
          <div className="search">
            <h1 className="search-heading">Your Passwords {count}</h1>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="img"
              />
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <hr />
          <div className="passwords">
            <checkbox id="checkbox" onChange={this.onChangeCheckbox} />
            <label htmlFor="checkbox">Show Passwords</label>
            <ul className="passwords-list">
              {passwordsList.map(eachOne => (
                <PasswordListItem
                  passwordDetails={eachOne}
                  isCheckboxClicked={isCheckboxClicked}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default PasswordManager
