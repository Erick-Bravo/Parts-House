const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { singleMulterUpload, singlePublicFileUpload } = require("../awsS3")

router.post("/", singleMulterUpload("image"), asyncHandler(async(req, res) => {
   
            const imageUrl = await singlePublicFileUpload(req.file);
            console.log(imageUrl)
            res.json({ imageUrl })
}));

module.exports = router;