const functions = require('firebase-functions')
const admin = require('firebase-admin')
const serviceAccount = require('../firebase-config.json')
const express = require('express')
const app = express()
const cors = require('cors')
const { upload_resume } = require('./controllers/upload')

app.use(cors({ origin: true }))
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

//#region Routes

app.post('/upload', upload_resume)

//#endregion

//#region Default express setup to check if everything's working
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'something went wrong'

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})
app.get('/', (req, res) => {
  res.status(200).send('successfully called DollarForThought API')
})

exports.api = functions.runWith({ timeoutSeconds: 540 }).https.onRequest(app)

//#endregion
