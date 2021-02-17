const express = require("express");
const asyncHandler = require("express-async-handler");
const { Part } = require("../../db/models");

const router = express.Router();

router.get("/:partId", asyncHandler(async(req, res) => {

    const { partId } = req.params;

    const part = await Part.findByPk(partId)
    res.json({ part })
}));

module.exports = router