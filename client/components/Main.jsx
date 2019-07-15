import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import { Redirect } from 'react-router'
import Campuses from './Campuses.jsx'
import SingleCampus from './SingleCampus.jsx'
import Students from './Students.jsx'
import SingleStudent from './SingleStudent.jsx'
import Navbar from './Navbar.jsx'
import store, { fetchCampuses, fetchStudents } from '../store'

class Main extends Component {

  componentDidMount() {
    store.dispatch(fetchCampuses())
    store.dispatch(fetchStudents())
  }

  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            {/* <Route path="/" component={Campuses} /> */}
            <Route exact path="/campuses" component={Campuses} />
            <Route exact path="/students" component={Students} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route path="/students/:studentId" component={SingleStudent} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Main;