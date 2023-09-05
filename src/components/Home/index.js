import {Component} from 'react'

import Popup from 'reactjs-popup'

import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'

import {RiContactsLine} from 'react-icons/ri'
import Header from '../Header/index'

import './index.css'

class Home extends Component {
  state = {
    boads: '',
    textinput: '',
    close: false,
    boardMembers: ['Foundations', 'Assignments'],
  }

  submitForm = async event => {
    event.preventDefault()
    const {textinput} = this.state
    this.setState(pre => ({
      boardMembers: [...pre.boardMembers, textinput],
      textinput: '',
    }))
  }

  todo = () => {
    const {history} = this.props
    history.replace('./todoitems')
  }

  closebutton = () => {
    console.log('surya')
    this.setState({close: true})
  }

  closebut = () => {
    this.setState({close: false})
  }

  inputvalue = e => {
    this.setState({textinput: e.target.value})
  }

  render() {
    const {close, boardMembers, textinput} = this.state
    console.log(boardMembers)
    return (
      <div className="main-container">
        <Header />
        <div className="home-container">
          <div className="arrange end">
            <div className="name1">
              <p className="name-text">W</p>
            </div>
            <h1 className="home-head">Willam John’s Workspace</h1>
          </div>
          <div className="arrange ">
            <RiContactsLine className="human" />
            <p className="home-head">Your Workspace boards</p>
          </div>
          <ul className="align">
            {boardMembers.map(num => (
              <li type="none" className="list-items">
                <button type="none" className="bro">
                  {num}
                </button>
              </li>
            ))}
            <li className="task-items" type="none">
              <Popup
                trigger={
                  <button
                    type="button"
                    className="button1"
                    onClick={this.closebutton}
                  >
                    <AiOutlinePlus />
                    Create new board
                  </button>
                }
                position="top"
              >
                <form className="pop-up" onSubmit={this.submitForm}>
                  <button type="button" className="close">
                    <AiOutlineClose />
                  </button>
                  <input
                    type="text"
                    className="input"
                    placeholder="Add board title"
                    onChange={this.inputvalue}
                    value={textinput}
                  />
                  <p className="para">Willam John’s Workspace</p>
                  <button type="submit" className="but" onClick={this.closebut}>
                    Create Board
                  </button>
                </form>
              </Popup>
            </li>
          </ul>
          <button type="button" className="butt" onClick={this.todo}>
            Click to see the todo items
          </button>
        </div>
      </div>
    )
  }
}

export default Home
