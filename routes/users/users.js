var express = require('express');
var router = express.Router();

var admin = require('firebase-admin')
var serviceAccount = require('../../firebase_credentials/serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tower-8ed43.firebaseio.com"
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;