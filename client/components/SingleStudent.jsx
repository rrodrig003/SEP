import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import store, { fetchSingleStudent } from '../store'

class SingleStudent extends Component {
  
  async componentDidMount() {
    try {
      const response = await store.dispatch(fetchSingleStudent(this.props.match.params.studentId))
      if (!response.ok) throw Error(response.statusText)
    } catch (error) {
      console.log('### ERROR IN ASYNC CATCH SINGLE STUDENT', error)
    }
  }

  render() {

    const { student } = this.props
    console.log(student.campus)
    return (
      <div>
        <h1>{`${student.firstName} ${student.lastName}`}</h1>
        <h3>{student.email}</h3>
        <img src={student.imageUrl}></img>
        <h3>{student.gpa}</h3>
        <ul>
          {
            !student.campus
            ?
            <div style={{color: 'red'}} >STUDENT NOT ENROLLED IN A CAMPUS</div>
            :
            <li>
            <Link to={`/campuses/${student.campus.id}`}>{student.campus.name}</Link>
            </li>
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.students.singleStudent
  }
}

const stateComponent = connect(mapStateToProps)

const connectedSingleStudent = stateComponent(SingleStudent)

export default connectedSingleStudent
