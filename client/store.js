import { combineReducers, createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';
import { browserHistory, Redirect } from 'react-router'
import React, { Component } from 'react';


//ACTION CONSTANTS
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_STUDENTS = 'GET_STUDENTS'
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS'
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT'

const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS'
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT'

const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
const REMOVE_STUDENT = 'REMOVE_STUDENT'

//ACTION CREATORS

const getCampuses = (campuses) => ({ type: GET_CAMPUSES, campuses})

const getStudents = (students) => ({ type: GET_STUDENTS, students})

const getSingleCampus = (campus) => ({ type: GET_SINGLE_CAMPUS, campus})

const getSingleStudent = (student) => ({ type: GET_SINGLE_STUDENT, student})

const addNewCampus = (campus) => ({ type: ADD_NEW_CAMPUS, campus})
const addNewStudent = (student) => ({ type: ADD_NEW_STUDENT, student})

const removeCampus = (id) => ({ type: REMOVE_CAMPUS, id})
const removeStudent = (id) => ({ type: REMOVE_STUDENT, id})

//STATE
const campusState = {
  campuses: [],
  singleCampus: {}
}

const studentState = {
  students: [],
  singleStudent: {}
}

// campus REDUCER
const campusReducer = (state = campusState, action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return {...state, campuses: [...state.campuses, ...action.campuses] }
    case GET_SINGLE_CAMPUS:
      return {...state, singleCampus: action.campus }
    case ADD_NEW_CAMPUS:
      return {...state, campuses: [...state.campuses, action.campus] }
    case REMOVE_CAMPUS:
      const filtered = state.campuses.filter(elem => elem.id !== action.id)
      return {...state, campuses: [...filtered] }
    default:
      return state
  }
}

// student REDUCER
const studentReducer = (state = studentState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
        return {...state, students: [...state.students, ...action.students] }
    case GET_SINGLE_STUDENT:
      return {...state, singleStudent: action.student }
    case ADD_NEW_STUDENT:
      return {...state, students: [...state.students, action.student] }
    case REMOVE_STUDENT:
      const filtered = state.students.filter(elem => elem.id !== action.id)
      return {...state, students: [...filtered] }
    default:
      return state
  }
}

//THUNKS

export const fetchCampuses = () => (dispatch) => {
  return axios.get('/api/campuses')
    .then(res => res.data)
    .then(( campuses ) => {
      // console.log('THUNK_FETCH_CAMPUSES')
      dispatch(getCampuses(campuses))
    })
    .catch(e => console.error('***ERROR IN fetchCampuses:', e))
}

export const fetchStudents = () => (dispatch) => {
  return axios.get('/api/students')
    .then(res => res.data)
    .then((students) => {
      // console.log('THUNK_FETCH_STUDENTS')
      dispatch(getStudents(students))
    })
    .catch(e => console.error('***ERROR IN fetchStudents:', e))
}

export const fetchSingleCampus = (campusId) => (dispatch, getState) => {
  // console.log('FETCH SINGLE CAMP:', typeof campusId, campusId)
  return axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(( [campus] ) => { 
      dispatch(getSingleCampus(campus))
    })
    .catch(e => console.error('***ERROR IN fetchSingleCampus:', e))
}

export const fetchSingleStudent = (id) => (dispatch) => {
  // console.log('AXIOS FETCH SINGLE STUDENT:', typeof id, id)
  return axios.get(`/api/students/${id}`)
    .then(res => res.data)
    .then(( [student] ) => {
      // console.log('THUNK_FETCH_SINGLE_STUDENT')
      dispatch(getSingleStudent(student))
    })
    .catch(e => console.error('***ERROR IN fetchSingleStudent:', e))
}

export const postNewCampus = (campus) => (dispatch) => {
  console.log('IN AXIOS POST CAMPUS', campus)
  return axios.post('/api/campuses', campus)
    .then(res => res.data)
    .then(( newCampus ) => {
      console.log('### SUCCESS THUNK_POST_CAMPUS:', newCampus)
      dispatch(addNewCampus(newCampus))
    })
    .catch(e => console.error('***ERROR IN postNewCampus:', e))
}

export const postNewStudent = (student) => (dispatch) => {
  return axios.post('/api/students', student)
    .then(res => res.data)
    .then((newStudent) => {
      console.log('### THUNK_POST_STUDENT:', newStudent)
      dispatch(addNewStudent(newStudent))
    })
    .catch(e => console.error('***ERROR IN postNewStudent:', e))
}

export const deleteCampus = (id) => (dispatch) => {
  const campusId = parseInt(id, 10)
  return axios.delete(`/api/campuses/${id}`)
    .then(( {campus} ) => {
      dispatch(removeCampus(campusId))
    })
    .catch(e => console.error('***ERROR IN deleteCampuses:', e))
}

export const deleteStudent = (id) => (dispatch) => {
  const studentId = parseInt(id, 10)
  return axios.delete(`/api/students/${id}`, {id})
    .then(({student}) => {
      dispatch(removeStudent(studentId))
    })
    .catch(e => console.error('***ERROR IN deleteStudents:', e))
}

//root reducer
const rootReducer = combineReducers({ campuses: campusReducer, students: studentReducer})

// CREATE STORE AND MIDDLEWARE
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store;
// console.log(store.getState())
