const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send('Backend with SQLi vulnerabilities')
})

module.exports = router