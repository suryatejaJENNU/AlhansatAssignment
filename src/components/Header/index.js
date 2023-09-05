import {Component} from 'react'

import {AiOutlineHome, AiOutlineLock} from 'react-icons/ai'

import {BsSearch} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="Header-container">
        <div className="flexs">
          <div className="home-back">
            <AiOutlineHome className="home" />
          </div>
          <div className="lock">
            <AiOutlineLock className="home" />
          </div>
          <div className="mobile">
            <div className=" bi">
              <div className="bw">.</div>
              <div className="bw">.</div>
            </div>
          </div>
          <div className="lock">
            <BsSearch className="home" />
          </div>
          <div className="home-back1">
            <select className="options">
              <option value="Organization">organization </option>
            </select>
          </div>
          <div className="home-back2">
            <div className="bi">
              <div className="bw">.</div>
              <div className="bw">.</div>
            </div>
            <p className="boad">Boards</p>
          </div>
        </div>
        <div className="home-back3">
          <div className="bi">
            <div className="bw">.</div>
            <div className="bw">.</div>
          </div>
          <h1 className="task">Task Manager</h1>
        </div>
        <div className="flexs">
          <div className="home-back4">
            <input type="search" className="search" placeholder="search" />
            <BsSearch className="search-icon" />
          </div>
          <div className="flexs">
            <p className="log-out">Log Out</p>
            <div className="name-container">
              <p className="name">WJ</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
