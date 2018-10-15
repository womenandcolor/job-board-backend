const express = require("express");

const { healthRouter } = require('../routes/health/health.router')
const { db } = require('../db/index')

const router = express.Router();
router.use("/health", healthRouter);

router.get("/profiles", (req, res) => {
    db
        .select('*')
        .from('accounts_profile')
        .then(profiles => res.json(profiles))
        .catch(err => res.json(err))
})

module.exports = router;
