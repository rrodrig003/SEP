const express = require('express')
const router = express()
const { Campus, Student} = require('./models')

router.get('/students', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next)
})

router.get('/students', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.send(campuses))
  .catch(next)
})

module.exports = router
