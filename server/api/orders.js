const router = require('express').Router();
const { Orders, Movie }=require("../db");

// GET /api/orders <----- i dont know if we need this
router.get('/', async (req, res, next) => {
  try {
      const orders = await Orders.findAll({
          include: [{ model: Movie, as: 'movie'}]
      })
      res.send(orders)
  }
  catch (error) {
      next(error)
  }
})

// GET /api/orders/:id
router.get('/:id', async (req, res, next) => {
    try {
        const order = await Orders.findByPk({
            include: [{ model: Movie, as: 'movie'}]
        })
        res.send(order)
    }
    catch (error) {
        next(error)
    }
})

// POST /api/orders/id
router.post('/:id', async (req, res, next) => {
  try {
      const addOrder = await Orders.create(req.body);
      res.send(addOrder)
  }
  catch (error) {
      next(error)
  }
})

// UPDATE /api/orders/:id
router.get('/:id', async (req, res, next) => {
  try {
      const updateOrder = await Orders.findByPk(req.params.id);
      const updated = await updateOrder.update(req.body)
      res.send(updated)
  }
  catch (error) {
      next(error)
  }
})

// DELETE /api/orders/:id
router.delete('/:id', async (req, res, next) => {
  try {
      const orderId = Number(req.params.id)
      const deleteOrder = await Orders.findByPk(id);
      await deleteOrder.destroy();
      res.send(deleteOrder);
  }
  catch (error) {
      next(error)
  }
})

module.exports = router;
