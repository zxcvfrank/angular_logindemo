// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./json-server/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// auth_token authorization
server.use((req, res, next) => {
  if (req.headers['authorization'] == 'Bearer 1234567890') {
    next()
  } else {
    res.sendStatus(401)
  }
 })

 // cutstom route
server.use('/api', router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
