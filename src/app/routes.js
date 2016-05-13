import Layout from './components/layouts/Layout'

import Landing from './pages/Landing'
import SearchRestaurantsPage from './pages/SearchRestaurantsPage'

const routes = [{
  path: '/',
  component: Layout,
  indexRoute: { component: Landing },
  childRoutes: [
    {
      path: 'area/:postcode',
      getComponent (location, cb) {
        console.log("sub route")
        require.ensure([], () => {
          cb(null, SearchRestaurantsPage)
        })
      }
    }
  ]
}]

export default routes
