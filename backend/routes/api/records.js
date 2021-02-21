const express = require("express");
const asyncHandler = require("express-async-handler");
const { Record, Part } = require("../../db/models")

const router = express.Router();

router.get("/:recordId", asyncHandler(async(req, res) => {
    const { recordId } = req.params;

    const record = await Record.findOne({
        where: { id: parseInt(recordId) },
        include: Part,
    })

    return res.json({ record })
}))

router.post("/create", asyncHandler(async(req, res) => {
    
    const { 
        type,
        name,
        make,
        cost,
        model,
        serial,
        description,
        partsHouseId, 
    } = req.body.formData

    const record = await Record.create({
        type,
        name,
        make,
        cost,
        model,
        serial,
        description,
        partsHouseId, 
    });

    return res.json({ record });

}));

router.delete("/:recordId/delete", asyncHandler(async(req, res) => {

    const { recordId } = req.body;

    const record = await Record.findByPk(recordId);
    await record.destroy();

return res.json({ record })

}));

// Get PARTS - its here because I needs to use params for the Id
router.get("/:recordId/parts", asyncHandler(async(req, res) => {

    const { recordId } = req.params;

    const parts = await Part.findAll({
        where: { recordId: recordId },
    });
    return res.json({ parts })
}));


module.exports = router