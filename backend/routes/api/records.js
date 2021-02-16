const express = require("express");
const asyncHandler = require("express-async-handler");
const { Record, Part, PartsHouse } = require("../../db/models")

const router = express.Router();

router.get("/:recordId", asyncHandler(async(req, res) => {
    const { recordId } = req.params;

    const records = await Record.findOne({
        where: { id: parseInt(recordId) },
        include: Part,
    })

    return res.json({ records })
}))

router.post("/create", asyncHandler(async(req, res) => {
    
    const { 
        type,
        name,
        make,
        cost,
        model,
        serial,
        additionalInfo,
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
        additionalInfo,
        description,
        partsHouseId, 
    })

    return res.json({ record })

}));

router.delete("/:recordId/delete", asyncHandler(async(req, res) => {

    const { recordId } = req.body;

    const record = await Record.findByPk(recordId);
    await record.destroy();

return res.json({ record })

}));


module.exports = router