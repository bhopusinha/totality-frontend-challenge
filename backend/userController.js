const User = require('./userModel');
const asyncHandler = require('async-error-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validate = require('validator');

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // console.log('Uploaded file:', req.file);
    const file_image = `${req.file.filename}`;
    // console.log(file_image);
    const existEmail = await User.findOne({ email: email });

    if (existEmail) {
        return res.status(400).json({ success: false, message: "Email already exists!" });
    }

    if (!validate.isEmail(email)) {
        return res.status(400).json({ success: false, message: "please enter a valid email!" });
    }

    let user = new User({ name, email, password, image: file_image });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user = await user.save();

    const token = jwt.sign({ id: user._id }, 'SECRET_TOKEN');


    res.json({ success: true, user, token });
});


const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(400).json({ success: false, message: "User not Found!" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    // console.log(comparePassword);

    if (!comparePassword) {
        return res.status(400).json({ success: false, message: "Email and Password is Incorrect!" });
    }

    const token = jwt.sign({ id: user._id }, 'SECRET_TOKEN');

    // const {id}= jwt.verify(token,"SECRET_TOKEN");
    // console.log(id);
    res.status(201).json({ success: true, user, token });

})



    const loadUser = asyncHandler(async (req, res) => {
        try {
            const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
            // console.log(token);

            if (!token) {
                return res.status(401).json({ success: false, message: 'No token provided' });
            }

            const decodedData = jwt.verify(token, 'SECRET_TOKEN');
            //  console.log(decodedData);
            const user = await User.findById(decodedData.id); 
            //   console.log(user);
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }

            res.status(200).json({ success: true, user });
        } catch (error) {
            if (error.name === 'JsonWebTokenError') {
                return res.status(401).json({ success: false, message: 'Invalid token' });
            }
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ success: false, message: 'Token expired' });
            }

            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    });


module.exports = { register, login, loadUser };
