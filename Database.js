import SQLite from 'react-native-sqlite-storage';

const database_name = 'Users.db';
const database_version = '1.0';
const database_displayname = 'SQLite User Database';
const database_size = 200000;

let db;

const openDatabase = () => {
  db = SQLite.openDatabase(
    database_name,
    database_version,
    database_displayname,
    database_size,
    () => {
      console.log('database opened');
    },
    error => {
      console.error('Error opening database: ', error);
    },
  );

  db.transaction(txn => {
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, email TEXT UNIQUE, password TEXT);',
      [],
      () => {
        console.log('Users table created successfully');
      },
      error => {
        console.error('Error creating table: ', error);
      };
  });
};

const insertUser = (userName, email, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?);',
        [userName, email, password],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      );
    });
  });
};

const getUser = (email, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM users WHERE username = ? AND password = ?;',
        [email, password],
        (_, result) => {
          if (result?.rows?.length > 0) {
            resolve(result.rows.item(0));
          } else {
            reject('User not found');
          }
        },
        (_, error) => reject(error),
      );
    });
  });
};

export {openDatabase, insertUser, getUser};
