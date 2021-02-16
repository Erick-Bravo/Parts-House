const express = require("express");
const asyncHandler = require("express-async-handler");
const { Part } = require("../../db/models");

const router = express.Router();

router.get("/:partsId", asyncHandler(async(req, res) => {

    const { partsId } = req.body
    const part = await Part.findByPk(partsId);
    return res.json({ part })
}));

module.exports = router