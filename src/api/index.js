const express = require("express");

const { healthRouter } = require('../routes/health/health.router')
const { profilesRouter } = require('../routes/profiles/profiles.router')

const router = express.Router();

router.use("/health", healthRouter);
router.use("/api/v1", profilesRouter);

module.exports = router;
