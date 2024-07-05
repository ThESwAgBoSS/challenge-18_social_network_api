const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');  // Adjusted path

// Define your routes using thoughtController methods
router.get('/', thoughtController.getAllThoughts);
router.get('/:thoughtId', thoughtController.getThoughtById);
router.post('/', thoughtController.createThought);
router.put('/:thoughtId', thoughtController.updateThought);
router.delete('/:thoughtId', thoughtController.deleteThought);

module.exports = router;