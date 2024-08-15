const express = require('express');
const { register, login, loadUser } = require('./userController');
const userRouter = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage });

userRouter.route('/').post(upload.single("image"), register).get(loadUser);
userRouter.route('/login').post(login);

module.exports = userRouter;