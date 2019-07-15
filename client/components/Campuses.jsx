import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Campuses extends Component {

	render() {
		const { campuses } = this.props;

		return (
			<div>
				<h2>CAMPUSES</h2>
				<ul>
					{campuses.map(campus => {
						return (
						<li key={campus.id}>
							<Link to={`/campuses/${campus.id}`} >{campus.name}</Link>
							<img src={campus.imageUrl}></img>
						</li>
            )
					})
					}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		campuses: state.campuses.campuses
	};
};

const stateComponent = connect(mapStateToProps)

const connectedCampus = stateComponent(Campuses);

export default connectedCampus;
