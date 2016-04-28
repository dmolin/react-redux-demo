const React = require('react')
const { Router, browserHistory } = require('react-router')
const { Provider } = require('react-redux')

import Layout from './Layout'
import Landing from './Landing'
import configureStore from '../store'
import {syncHistoryWithStore} from 'react-router-redux'

const routes = [{
  path: '/',
  component: Layout,
  indexRoute: { component: Landing },
  childRoutes:[]
  /*
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Search'))
      })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Details'))
      })
      }
    }
  ]*/
}]

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes}>
        </Router>
      </Provider>)
  }
}

App.Routes = routes
App.History = browserHistory

export default App
