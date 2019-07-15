import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { postNewStudent, deleteStudent } from "../store";
const faker = require("faker");

const generateGPA = () => Math.random() * (+4 - +0) + +0;

class Students extends Component {
	render() {
		const { students, addStudent, removeStudent } = this.props;

		return (
			<div>
				<h2>STUDENTS</h2>
				<ul>
					{students.map(student => (
						<li key={student.id}>
							<Link to={`/students/${student.id}`}>{`${student.firstName} ${student.lastName}`}</Link>
              <button type="button" onClick={() => removeStudent(student.id)} >X</button>
						</li>
					))}
				</ul>
				<form
					id="new-student"
					style={{
						display: 'flex',
						flexDirection: 'column'
					}}
					onSubmit={addStudent}
				  >
					<input type="text" name="firstName" placeholder="Enter first name" />
          <input type="text" name="lastName" placeholder="Enter student name" />
          <input type="text" name="email" placeholder="Enter student email" />
					<input type="text" name="imageUrl" placeholder="Enter student image URL (OPTIONAL)" />
					<input type="text" name="gpa" placeholder="Enter student gpa (OPTIONAL)" />
					<span>
						<button type="submit">Submit</button>
					</span>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addStudent: function(ev) {
			ev.preventDefault();
			const student = {
				firstName: ev.target.firstName.value,
				lastName: ev.target.lastName.value,
				email: ev.target.email.value,
				imageUrl: ev.target.imageUrl.value || faker.image.avatar(),
				gpa: ev.target.gpa.value || generateGPA()
      };
      ev.target.firstName.value = ''
      ev.target.lastName.value = ''
      ev.target.email.value = ''
      ev.target.imageUrl.value = ''
      ev.target.gpa.value  = ''
			console.log('IN Student DISPATCH TO PROPS', student);
			dispatch(postNewStudent(student));
		},
		removeStudent: function(id) {
			console.log('IN REMOVE STUDENT DISPATCH TO PROPS', id)
			dispatch(deleteStudent(id))
		}
	};
};

const mapStateToProps = state => {
	return {
		students: state.students.students
	};
};

const stateComponent = connect(
	mapStateToProps,
	mapDispatchToProps
);

const connectedStudent = stateComponent(Students);

export default connectedStudent;
