const router = require("express").Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteOneThought,
    createReaction,
    deleteOneReaction,
  } = require("../../controllers/thoughtController");

  router.route("/").get(getAllThoughts).post(createThought);

  router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteOneThought);

router.route("/:thoughtId/reactions").post(createReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteOneReaction);


module.exports = router;