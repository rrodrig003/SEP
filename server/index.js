const express = require('express')
const path = require('path')
const app = express()
const { db, Campus, Student} = require('./models')

app.use('/api', require('./routes'))

// app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')))

const PORT = 3000
let connection;

db.sync({ force: true })
  .then(() => console.log('DB Synced'))
  .then(() => app.listen(PORT, () => console.log('LISTENING on port 3000!')))
  // .then(() => connection.close(() => console.log('CONNECTION CLOSED')))
  .catch(e => console.error('ERROR IN SYNC', e))


app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});
