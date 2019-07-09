import { combineReducers, createStore, applyMiddleware } from 'redux';
// const { combineReducers, createStore, applyMiddleware } = require('redux')
import axios from 'axios';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//ACTION CONSTANTS
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_STUDENTS = 'GET_STUDENTS'

//ACTION CREATORS
const getCampuses = (campuses) => ({ type: GET_CAMPUSES, campuses})

const getStudents = (students) => ({ type: GET_STUDENTS, students})

//INITIAL STATE
// const initialState = {
//   campuses: [],
//   students: []
// }

// campus REDUCER
const campusReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return [...state, ...action.campuses]
    default:
      return state
  }
}

// student REDUCER
const studentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
        return [...state, ...action.students]
    default:
      return state
  }
}

//THUNKS

export const fetchCampuses = () => (dispatch) => {
  axios.get('/campuses')
    .then(res => res.data)
    .then(( campuses ) => dispatch(getCampuses(campuses)))
}

export const fetchStudents = () => (dispatch) => {
  axios.get('/students')
    .then(res => res.data)
    .then((students) => dispatch(getStudents(students)))
}

//root reducer
const rootReducer = combineReducers({ campuses: campusReducer, students: studentReducer})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store;
// console.log(store.getState())

// CREATE STORE AND MIDDLEWARE