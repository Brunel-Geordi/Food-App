const express = require('express');
const multer = require('multer');
const router = express.Router()

// Configuration de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./IMG/${req.query.point}/`)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), (req, res) => {
  const file = {image: req.file};

  if (!file) {
    res.status(400).json({ error: 'No file uploaded' });
    return;
  }
  res.status(200).send({ message: 'File uploaded successfully', image: file});
});

module.exports = router;


