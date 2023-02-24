const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowscows'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
    connection.query(
      'create table if not exists cows ( \
        id int not null auto_increment primary key, \
        Name varchar(16), \
        Description varchar(255) \
      )'
    )
  }
});

// Your Database Queries Here!!
var insertCow = function(cowName, cowDesc, cb) {
  connection.execute(
    'insert into cows (Name, Description) values (?, ?)',
    [cowName, cowDesc],
    (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    }
  )
};

var getCows = function(cb) {
  connection.execute(
    'select * from cows',
    (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    }
  )
};

// Don't forget to export your functions!
module.exports = {connection, insertCow, getCows
};
