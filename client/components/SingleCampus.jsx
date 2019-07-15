import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import store, { fetchSingleCampus } from '../store'

class SingleCampus extends Component {

  async componentDidMount() {

    try {
      const response = await store.dispatch(fetchSingleCampus(this.props.match.params.campusId))

      if (!response.ok) throw Error(response.statusText);
    } catch (error) {
      console.log('### ERROR IN CATCH SINGLE CAMPUS', error)
    }
  }

  render() {
    let campusArr = Object.values(this.props.campus)

    const { campus } = this.props

    return (
      <div>
        <h1>{campus.name}</h1>
        <img src={campus.imageUrl}></img>
        <h3>{campus.address}</h3>
        <p>{campus.description}</p>
        <ul>
        {
          !campusArr.length
          ?
          <div>SORRY! No students enrolled at this time.</div>
          :
          campus.students.map(student => <li key={student.id}><Link to={`/students/${student.id}`} >{`${student.firstName} ${student.lastName}`}</Link></li>)
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campus: state.campuses.singleCampus
  }
}

const stateComponent = connect(mapStateToProps)

const connectedSingleCampus = stateComponent(SingleCampus)

export default connectedSingleCampus
