var express = require('express');
var Korisnici = require('../models/korisnici');

var router = express.Router();

router.get('/', (req, res) => {
  Korisnici.retrieveAll((err, korisnici) => {
    if (err)
      return res.json(err);
    return res.json(korisnici);
  });
});

router.post('/', (req, res) => {
  var korisnik = req.body.korisnik;

  Korisnici.insert(korisnik, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;