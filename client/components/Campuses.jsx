import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { postNewCampus } from '../store';
const faker = require('faker')

class Campuses extends Component {
	render() {
		const { campuses, addCampus } = this.props;

		return (
			<div>
				<h2>CAMPUSES</h2>
				<ul>
					{campuses.map(campus => {
						return (
							<li key={campus.id}>
								<Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
								<img src={campus.imageUrl} />
							</li>
						);
					})}
				</ul>
				<form
					id="new-campus"
					style={{
						display: 'flex',
						flexDirection: 'column',
					}} onSubmit={addCampus}>
						<input type="text" name="name" placeholder="Enter campus name" />
						<input type="text" name="imageUrl" placeholder="Enter campus image URL (OPTIONAL)" />
          	<input type="text" name="address" placeholder="Enter campus address" />
						<input type="text" name="description" placeholder="Enter campus description (OPTIONAL)" />
						<span>
							<button type="submit">Submit</button>
						</span>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCampus: function (ev) {
			ev.preventDefault();
			const campus = {
				name: ev.target.name.value,
				imageUrl: ev.target.imageUrl.value || faker.image.avatar(),
				address: ev.target.address.value,
				description: ev.target.description.value || faker.lorem.sentences(),
			}
			console.log('IN CAMPUS DISPATCH TO PROPS', campus)
			dispatch(postNewCampus(campus))
    }
  }
}

const mapStateToProps = state => {
	return {
		campuses: state.campuses.campuses
	};
};

const stateComponent = connect(mapStateToProps, mapDispatchToProps);

const connectedCampus = stateComponent(Campuses);

export default connectedCampus;
