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
  console.log("check")
});


router.post('/', (req, res, next) => {
  
})

module.exports = router;