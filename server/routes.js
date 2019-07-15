const express = require('express')
const router = express()
const bodyParser = require('body-parser')
const { Campus, Student} = require('./models')

router.use(bodyParser.json());

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
  return Campus.findAll({
    where: { id: campusId },
    include: [ Student ]
    })
    .then(campus => {
      return res.send(campus)
    })
    .catch(next)
})

router.post('/campuses', (req, res, next) => {
  console.log('@@@ IN POST CAMPUS: ', req.body)
  return Campus.create(req.body)
  .then(newCampus => {
    console.log('@@@ POSTed CAMPUS: ', newCampus)
    res.send(newCampus)
  })
  .catch(e => {
    console.log(e)
    next(e)
  })
})

router.post('/students', (req, res, next) => {
  return Student.create(req.body)
    .then((newStudent) => {
      console.log('@@@ POSTed STUDENT: ', newStudent)
      newStudent.setCampus((Math.floor(Math.random() * (6 - 1)) + 1))
      res.send(newStudent)
    })
    .catch(e => {
      console.log(e)
      next(e)
    })
})

router.delete('/students/:id', (req, res, next) => {
  const studentId = parseInt(req.params.id, 10)
  return Student.destroy({
    where: { id: studentId }
    })
    .then(destroyedStudent => {
      console.log('destroyed Student')
      return res.send({studentId})
    })
    .catch(e => {
      console.log(e)
      next(e)
    })
})

router.delete('/campuses/:id', (req, res, next) => {
  const campusId = parseInt(req.params.id, 10)
  return Campus.destroy({
    where: { id: campusId }
    })
    .then(destroyedCampus => {
      console.log('destroyed Campus')
      return res.send({campusId})
    })
    .catch(e => {
      console.log(e)
      next(e)
    })
})

module.exports = router
