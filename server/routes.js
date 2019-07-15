const express = require('express')
const router = express()
const { Campus, Student} = require('./models')

router.get('/students', (req, res, next) => {
  return Student.findAll()
    .then(students => res.send(students))
    .catch(next)
})

router.get('/students/:id', (req, res, next) => {
  const studentId = parseInt(req.params.id, 10)
  return Student.findAll({
    where: { id: studentId },
    include: [ Campus ]
    })
    .then(student => {
      // console.log('#### GOT SINGLE STUDENT FROM SERVER', student)
      res.send(student)
    })
    .catch(next)
})

router.get('/campuses', (req, res, next) => {
  return Campus.findAll()
  .then(campuses => res.send(campuses))
  .catch(next)
})

router.get('/campuses/:id', (req, res, next) => {
  const campusId = parseInt(req.params.id, 10)
  // console.log('IN SINGLE CAMPUS ROUTE')
  return Campus.findAll({
    where: { id: campusId },
    include: [ Student ]
    })
    .then(campus => {
      // console.log('#### GOT SINGLE CAMPUS ROUTE', campus)
      return res.send(campus)
    })
    .catch(next)
})

module.exports = router
