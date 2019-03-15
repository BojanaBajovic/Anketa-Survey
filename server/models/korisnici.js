const db = require('../database');

class Korisnici {
  static retrieveAll (callback) {
    db.query('SELECT * from korisnici', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert (korisnik, callback) {
    db.query('INSERT INTO korisnici (name,lastname,email,password) VALUES ($1)', [korisnik], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Korisnici;