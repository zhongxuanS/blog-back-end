
const config = {
  mysqlUrl: 'mysql://test:123@10.206.174.25:3306/test',
  pool: {
    max: 5,
    min: 9,
    acquire: 30000,
    idle: 10000
  }
}

module.exports = config;