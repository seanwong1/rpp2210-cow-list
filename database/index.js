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
        Description varchar(64) \
      )'
    )
  }
});

// Your Database Queries Here!!





// Don't forget to export your functions!
module.exports = {connection

};
