const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const StudentRegister = require('../models/StudentModels');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/imagefiles');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.post('/', upload.single('picture'), async (req, res) => {
    try {
        const StudentRegister = new StudentRegister(req.body);

        StudentRegister.picture = req.file.path;
        console.log(StudentRegister);
        await StudentRegister.save((err) => {
            if (err) {
                throw err;
            }
            res.redirect('/');
        });
    } catch (error) {
        res.status(400).send('Data not sent to Database');
    }
});
module.exports = router;