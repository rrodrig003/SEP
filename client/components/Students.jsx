import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

class Students extends Component {
  
  render() {
    const { students } = this.props
    
    return (
      <div>
        <h2>STUDENTS</h2>
          <ul>
            {
              students.map(student => <li key={student.id}><Link to={`/students/${student.id}`} >{`${student.firstName} ${student.lastName}`}</Link></li>)
            }
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students.students
  }
}

const stateComponent = connect(mapStateToProps)

const connectedStudent = stateComponent(Students)

export default connectedStudent
