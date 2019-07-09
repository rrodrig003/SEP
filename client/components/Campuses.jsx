import React from 'react';
import { connect } from 'react-redux'


const Campuses = (props) => {
  const { campuses } = props
  return (
    // <div>CAMPUSES</div>
    <div>
      <h2>CAMPUSES</h2>
        <ul>
          {
            campuses.map(campus => <li key={campus.id}>{campus.name}</li>)
              // <img src={campus.imageUrl}></img>
          }
        </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const stateComponent = connect(mapStateToProps)

const connectedCampus = stateComponent(Campuses)

export default connectedCampus
