const express = require("express");
const asyncHandler = require("express-async-handler");
const csrf = require("csurf")
const { PartsHouse } = require("../../db/models");

const router = express.Router();

router.post("/create", asyncHandler(async(req, res) => {
    
    const { name, userId } = req.body
    const ph = await PartsHouse.create({ name, userId })
    return res.json(ph)

}))

module.exports = router