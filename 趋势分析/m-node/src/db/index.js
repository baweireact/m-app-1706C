const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'demo'
})

connection.connect((error) => {
  if (error) {
    console.log('链接数据库失败！', error)
  } else {
    console.log('连接数据库成功！')
  }
})

const query = (sql) => new Promise((resolve, reject) => {
  connection.query(sql, (error, results) => {
    if (error) {
      reject(error)
    } else {
      resolve(results)
    }
  })
})

module.exports = {
  query
}