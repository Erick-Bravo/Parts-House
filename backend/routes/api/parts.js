const express = require("express");
const asyncHandler = require("express-async-handler");
const { Part, Log } = require("../../db/models");

const router = express.Router();

router.get("/:partId", asyncHandler(async(req, res) => {

    const { partId } = req.params;

    const part = await Part.findByPk(partId)
    res.json({ part })
}))


router.post("/create", asyncHandler(async(req, res) => {

    const { 
        name,
        make,
        cost,
        model,
        serial,
        description,
        buyUrl,
        recordId, 
        imgUrl,
    } = req.body.formData
    
    const part = await Part.create({
        name,
        make,
        cost,
        model,
        serial,
        description,
        buyUrl,
        recordId, 
        imgUrl,
    });

    return res.json({ part })

}));



router.delete("/:partId/delete", asyncHandler(async(req, res) => {

    const { partId } = req.body;

    const part = await Part.findByPk(partId);
    await part.destroy();

    return res.json({ part })

}));



router.post("/:partId/logs/create", asyncHandler(async(req, res) => {

    const { partId } = req.body;

    const { 
        note,
        date
    } = req.body.formData

    const log = await Log.create({
        note,
        date,
        partId: parseInt(partId)
    });

    return res.json({ log })

}));



module.exports = router