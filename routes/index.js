const express = require("express");
const router = express.Router();

const parseUrl = require('../services/parse-url');

router.get("/", async (req, res) => {
    const url = req.query.url || null;
    const result = url ? await parseUrl(url) : {};

  res.render("index", result);
});

module.exports = router;
