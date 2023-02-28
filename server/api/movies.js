const router = require('express').Router();
const { Movie, Personnel }=require("../db");

// GET /api/movies
router.get('/', async (req, res, next) => {
	console.log('Between lines 5 and 6 in moives.js');
    try {
        const movies = await Movie.findAll({
            include: [ Personnel ]
        })
        res.json(movies)
    }
    catch (error) {
        next(error)
    }
})

// GET /api/movies/:id
router.get('/:id', async (req, res, next) => {
    try {
        const movie = await Movie.findByPk(req.params.id, {
          include: [ Personnel ]
        })
        res.json(movie)
    }
    catch (error) {
        next(error)
    }
})

// POST /api/movies
router.post('/', async (req, res, next) => {
  try {
      const addMovie = await Movie.create(req.body);
      res.json(addMovie)
  }
  catch (error) {
      next(error)
  }
})

// UPDATE /api/movies/:id
router.put('/:id', async (req, res, next) => {
  try {
      const updateMovie = await Movie.findByPk(req.params.id);
      const updated = await updateMovie.update(req.body)
      res.send(updated)
  }
  catch (error) {
      next(error)
  }
})

// DELETE /api/movies/:id
router.delete('/:id', async (req, res, next) => {
  try {
      const movieId = Number(req.params.id)
      const deleteMovie = await Movie.findByPk(id);
      await deleteMovie.destroy();
      res.send(deleteMovie);
  }
  catch (error) {
      next(error)
  }
})

module.exports = router;
