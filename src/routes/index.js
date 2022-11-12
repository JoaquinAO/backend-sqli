const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send('Backend with SQLi vulnerabilities<br>La parte vulnerable se encuentra en la ruta /user?name=<br>Los nombres que podemos probrar son:<br>name1<br>name2<br>name3<br>name4<br>name5<br>name6<br>name7<br>name8<br>name9<br>name10<br>name11<br>name12<br>name13<br>name14')
})

module.exports = router