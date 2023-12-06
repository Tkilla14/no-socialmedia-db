const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  
} = require('../../controllers/userController');

// GET and POST all users
router.route('/').get(getAllUsers).post(createUser);

// GET user, PUT update user and DELETE user 
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

// POST add friend and DELETE remove Friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


// Export the router
module.exports = router;