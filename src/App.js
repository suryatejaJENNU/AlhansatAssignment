import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home/index'

import Login from './components/Login/index'

import Todo from './components/TodoItems/index'

import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/todoitems" component={Todo} />
    </Switch>
  )
}

export default App
