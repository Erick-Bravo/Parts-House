const express = require("express");
const asyncHandler = require("express-async-handler");
const { PartsHouse } = require("../../db/models");

const router = express.Router();

router.post("/create", asyncHandler(async(req, res) => {
    
    const { name, userId } = req.body
    const ph = await PartsHouse.create({ name, userId })
    return res.json({ ph })
}))

router.delete("/:partsHouseId/delete", asyncHandler(async(req, res) => {

    const { partsHouseId } = req.body;

    const ph = await PartsHouse.findByPk(partsHouseId);
    await ph.destroy();

    res.json({ ph })

}));

module.exports = router