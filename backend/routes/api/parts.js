const express = require("express");
const asyncHandler = require("express-async-handler");
const { Part } = require("../../db/models");

const router = express.Router();

router.get("/:partId", asyncHandler(async(req, res) => {

    const { partId } = req.params;

    const part = await Part.findByPk(partId)
    res.json({ part })
}))

// router.post("/create", asyncHandler(async(req, res) => {

//     const {
//         name,
//         make,
//         model,
//         cost,
//         serial,
//         description,
//         recordId,
//     } = req.body.formData

//     const part = await Part.create({
        
//     })

// }))



router.post("/create", asyncHandler(async(req, res) => {

    const { 
        name,
        make,
        cost,
        model,
        serial,
        description,
        recordId, 
    } = req.body.formData
    
    const part = await Part.create({
        name,
        make,
        cost,
        model,
        serial,
        description,
        recordId, 
    });

    return res.json({ part })

}));




router.delete("/:partId/delete", asyncHandler(async(req, res) => {

    const { partId } = req.body;

    const part = await Part.findByPk(partId);
    await part.destroy();

    return res.json({ part })

}));



module.exports = router