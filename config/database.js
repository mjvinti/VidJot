if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://mario:p@$$w0rd@ds155268.mlab.com:55268/vidjot-prod-db'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}