const Sequelize = require('sequelize')
const db =  new Sequelize('postgres://localhost:5432/university', { logging: false })
const faker = require('faker')

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: faker.image.nature(),
    isUrl: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  description: {
    type: Sequelize.TEXT
  }
})

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    isEmail: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: faker.image.avatar(),
    isUrl: true,
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 1),
    defaultValue: 0,
    validate: { min: 0.0, max: 4.0 }
  }
})

Student.belongsTo(Campus)
Campus.hasMany(Student)

module.exports = {
  db,
  Campus,
  Student,
}
