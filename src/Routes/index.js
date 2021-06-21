import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { root, titles } from './routesConstants'
import TopBar from './TopBar'
import ScrollToTop from './ScrollToTop'

import Home from '../Screens/Home'
import Titles from '../Screens/Titles'

const Routes = () => {
  return (
    <Router>
      <TopBar />
      <ScrollToTop>
        <Switch>
          <Route component={Home} exact path={root} />
          <Route component={Titles} exact path={titles} />
          <Redirect to={root} />
        </Switch>
      </ScrollToTop>
    </Router>
  )
}

export default Routes
