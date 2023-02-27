const router = require('express').Router();
const { Users, Orders }=require("../db");

// GET /api/users <----- i dont know if we need this
router.get('/', async (req, res, next) => {
  try {
      const users = await Users.findAll({
          include: [{ model: Orders, as: 'orders'}]
      })
      res.send(users)
  }
  catch (error) {
      next(error)
  }
})

// GET /api/users/:id
router.get('/:id', async (req, res, next) => {
    try {
        const user = await Users.findByPk({
            include: [{ model: Orders, as: 'orders'}]
        })
        res.send(user)
    }
    catch (error) {
        next(error)
    }
})

// POST /api/users/id
router.post('/:id', async (req, res, next) => {
  try {
      const addUser = await Users.create(req.body);
      res.send(addUser)
  }
  catch (error) {
      next(error)
  }
})

// UPDATE /api/users/:id
router.get('/:id', async (req, res, next) => {
  try {
      const updateUser = await Users.findByPk(req.params.id);
      const updated = await updateUser.update(req.body)
      res.send(updated)
  }
  catch (error) {
      next(error)
  }
})

// DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
      const userId = Number(req.params.id)
      const deleteUser = await Users.findByPk(id);
      await deleteUser.destroy();
      res.send(deleteUser);
  }
  catch (error) {
      next(error)
  }
})

module.exports = router;
