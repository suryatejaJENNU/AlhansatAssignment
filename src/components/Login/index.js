import {Redirect} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class Login extends Component {
  jumpHome = () => {
    const {history} = this.props
    history.replace('./home')
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="task-heading">Task Manager</h1>
        <div className="login-page">
          <a href="https://ibb.co/mh5Cz69">
            <img
              src="https://i.ibb.co/vL4xzZ3/Screenshot-2023-08-29-12-23-10-74-40deb401b9ffe8e1df2f1cc5ba480b12.jpg"
              alt="Screenshot-2023-08-29-12-23-10-74-40deb401b9ffe8e1df2f1cc5ba480b12"
              border="0"
              className="image"
            />
          </a>

          <p className="disc">Task tracking for your everyday needs</p>
          <button type="button" className="button" onClick={this.jumpHome}>
            LOG IN WITH TRELLO
          </button>
        </div>
      </div>
    )
  }
}

export default Login
