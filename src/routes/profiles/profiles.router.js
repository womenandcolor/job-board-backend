const express = require('express');

const { profilesController } = require("./profiles.controller");

const router = express.Router();

router.get("/profiles", profilesController);

module.exports = {
  profilesRouter: router
}
