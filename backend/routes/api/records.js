const express = require("express");
const asyncHandler = require("express-async-handler");
const { Record, Part } = require("../../db/models")

const router = express.Router();

router.get("/:recordId", asyncHandler(async(req, res) => {
    const { recordId } = req.params;

    const records = await Record.findOne({
        where: { id: recordId },
        include: Part,
    })

    res.json({ records })
}))

module.exports = router