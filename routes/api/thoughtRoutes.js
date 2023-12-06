const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,

} = require('../../controllers/thoughtController');

// Routes for GET and POST all Thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Routes for Get, PUT and DELETE thoughts
router.route('/:thoughtsId').get(getOneThought).put(updateThought).delete(deleteThought);


// Routes for POST and DELETE Reactions
router.route('/:thoughtsId/reactions').post(createReaction).delete(deleteReaction)

module.exports = router;