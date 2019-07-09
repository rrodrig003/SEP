import React from 'react';
import { connect } from 'react-redux'

const Students = (props) => {
  const { students } = props
  return (
    // <div>STUDENTS</div>
    <div>
      <h2>STUDENTS</h2>
        <ul>
          {
            students.map(student => <li key={student.id}>{student.name}</li>)
                  // <img src={student.imageUrl}></img>
          }
        </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const stateComponent = connect(mapStateToProps)

const connectedStudent = stateComponent(Students)

export default connectedStudent
