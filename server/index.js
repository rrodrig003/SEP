const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const { db, Campus, Student} = require('./models')
const faker = require('faker')

app.use('/api', require('./routes'))

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')))

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../public', 'index.html'))
})

const generateGPA = () => (Math.random() * (+4 - +0) + +0)


const PORT = 3000
let connection;

db.sync({ force: true })
  .then(() => console.log('DB Synced'))
  .then(() => app.listen(PORT, () => console.log('LISTENING on port 3000!')))
  .then(() => {
    return (
      Promise.all([
        Campus.create({name: "Dragon Army Campus", imageUrl: "https://vignette.wikia.nocookie.net/ansible/images/7/75/DragonArmyLogo.png/revision/latest/scale-to-width-down/220?cb=20160304235533", address: "Dragon Road", description: "At one time, Dragon Army had gained the reputation of losing all of its battles, and it was soon discontinued. However, a few years later Colonel Graff assigned Bean to construct a hypothetical army using a roster of Battle School students. Bean, despite knowing every Battle Schooler's dossier by heart, still had to take sometime to decide who to put in, for he knew that the army would be commanded by Ender Wiggin, and become legendary." }),
        Campus.create({name: "Rabbit Army Campus", imageUrl: "https://vignette.wikia.nocookie.net/ansible/images/c/c7/RabbitArmyLogo.png/revision/latest/scale-to-width-down/220?cb=20160305001754", address: "Rabbit Town", description: "Rabbit Army was a Battle School Army most notably commanded by Carn Carby and later Bean. Dragon Army defeated Rabbit in their first battle. After the dissolving of Dragon Army, Bean was sent to be the commander of Rabbit Army. Rabbit was shown to be one of the kinder armies, helping to protect Ender Wiggin and assisting Bean in defeating Achilles de Flandres"}),
        Campus.create({name: "Salamander Army Campus", imageUrl: "https://vignette.wikia.nocookie.net/ansible/images/6/6c/SalamanderArmyLogo-0.png/revision/latest/scale-to-width-down/220?cb=20160305001019", address: "Salamader Parkway", description: "Salamander Army was a Battle School Army most notably commanded by Bonito de Madrid. Their color code was dark green, light green, and brown. Salamander shared a bathroom with Rat, Condor, and Squirrel Armies. Salamander Army was the first army Ender Wiggin was assigned to, and was later defeated by Ender's Dragon Army"}),
        Campus.create({name: "Phoenix Army Campus", imageUrl: "https://vignette.wikia.nocookie.net/ansible/images/e/ee/PhoenixArmyLogo.png/revision/latest/scale-to-width-down/220?cb=20160305000521", address: "Phoenix Concourse", description: "Phoenix Army was a Battle School Army most notably commanded by Petra Arkanian. While battling against Dragon Army, Phoenix was the most able to cope with Ender Wiggin's army's fluid and mobile attacks."}),
        Campus.create({name: "Rat Army Campus", imageUrl: "https://vignette.wikia.nocookie.net/ansible/images/7/74/RatArmyLogo.png/revision/latest/scale-to-width-down/220?cb=20160305002647", address: "Ratson Hole", description: "Rat Army was a Battle School Army most notably commanded by Rose The Nose, Rosen and later Dink Meeker. The army was known to not have proper discipline, but followed Rosen's orders without hesitation. When Ender Wiggin was transferred to Rat Army from Salamander Army, he met Rose The Nose who gave him two rules (Don't piss on the bed, and follow his orders) and was put into Dink Meeker's Toon. Rat army shared a bathroom with Salamander Army."})
      ])
    )
  })
  .then(data => {
    return (
      Promise.all([
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()}),
        Student.create({firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), imageUrl: faker.image.avatar(), gpa: generateGPA()})
      ])
    )
  })
  .then(data => {
    let promise = []
    data.forEach(elem => promise.push(elem.setCampus((Math.floor(Math.random() * (6 - 1)) + 1))))
    return Promise.all(promise)
    })
  // .then(() => connection.close(() => console.log('CONNECTION CLOSED')))
  .catch(e => console.error('ERROR IN SYNC', e))


app.use((err, req, res, next) => {
  if (err) { res.sendFile(path.join(__dirname, '../public')) }
  else {
    res.status(err.status || 500).send(err.message || 'Internal Server Error');
  }
});
