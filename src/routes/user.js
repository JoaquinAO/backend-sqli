const { Router } = require('express')
const router = Router()
const pool = require('../connection')

const middleware = (req, res, next) => {
  next()
}

router.get('/users', middleware, async (req, res) => {
  const response = await pool.query('SELECT * FROM usuario')
  res.status(200).json(response.rows)
})

router.get('/user', middleware, async (req, res) => {
  try {
    const result = await pool.query(`SELECT nombre_usuario, nombre, apellido, edad FROM usuario WHERE nombre = '${req.query.name}'`)
    if (!result.rows[0])
      return res.status(404).json({
        message: 'Usuario no encontrado',
      })
    return res.status(200).json(result.rows)
  } catch (error) {
    return res.status(500).json({
      message: 'Error en el servidor',
    })
  }
  
})

module.exports = router