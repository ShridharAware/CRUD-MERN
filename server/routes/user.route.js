const express = require("express");
const user = require("../controllers/user.controller");
const router = express.Router();

router.post("/", user.createUser);
router.get("/", user.findUsers);
router.put("/:id", user.updateUser);
router.delete("/:id", user.deleteUser);

module.exports = router;
