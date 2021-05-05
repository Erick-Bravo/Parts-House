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
        date,
        description,
        purchaseUrl,
        partsHouseId, 
    } = req.body.formData

    const record = await Record.create({
        type,
        name,
        make,
        cost,
        model,
        serial,
        date,
        description,
        purchaseUrl,
        partsHouseId, 
    });

    return res.json({ record });

}));


router.put("/:recordId/update", asyncHandler(async(req, res) => {
    
    const { 
        type,
        name,
        make,
        cost,
        model,
        serial,
        purchaseDate,
        description,
        purchaseUrl,
    } = req.body.formData

    const { recordId } = req.params; 

    const record = await Record.findByPk(parseInt(recordId));

    await record.update({
        type,
        name,
        make,
        cost,
        model,
        serial,
        purchaseDate,
        description,
        purchaseUrl, 
    })

    return res.json({ record });

}));

router.put("/:recordId/image-update", asyncHandler(async(req, res) => {
   
    const { imgUrl } = req.body.formData

    const { recordId } = req.params; 

    const record = await Record.findByPk(parseInt(recordId));

    await record.update({
        imgUrl 
    });

    return res.json({ record });

}));

router.delete("/:recordId/delete", asyncHandler(async(req, res) => {

    const { recordId } = req.params;

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