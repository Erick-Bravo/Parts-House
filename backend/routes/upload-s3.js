const router = require("express").Router();
const { singleMulterUpload, singlePublicFileUpload } = require("../awsS3")

router.post("/", singleMulterUpload("image"), async(req, res, next) => {
        try {
            const imageUrl = await singlePublicFileUpload(req.file);
            console.log(imageUrl)
            res.json({ imageUrl })
        } catch (e) {
            next(e)
        }
});

module.exports = router;