module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "testnode",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "define" : {
      "paranoid": true,
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
