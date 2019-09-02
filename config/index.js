
const config = {
  mysqlUrl: 'mysql://user:szx9231@192.168.2.176:3306/blog',
  pool: {
    max: 5,
    min: 9,
    acquire: 30000,
    idle: 10000
  }
}

module.exports = config;