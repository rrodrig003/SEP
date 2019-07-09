import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import Campuses from './Campuses.jsx'
import Students from './Students.jsx'
import Navbar from './Navbar.jsx'

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            {/* <Route path="/" component={Campuses} /> */}
            <Route path="/campuses" component={Campuses} />
            <Route path="/students" component={Students} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Main;