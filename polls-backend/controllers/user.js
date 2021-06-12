import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/user.js'

export const signin = async(req,res) => {
    const { email, password } = req.body;

    if(!email || !password) return res.status(400).json({ message: 'Fields with * are mandatory!' });

    const user = await User.findOne({ email });
    if(!user)
        return res.status(404).json({ message: 'User doesn\'t exist!' });

    const isCorrectPass = await bcrypt.compare(password, user.password);
    if(!isCorrectPass)
        return res.status(400).json({ message: 'Invalid Credentials!' });

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    res.status(200).json({ result: user, token });
}

export const signup = async(req,res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if(!firstName || !lastName || !email || !password || !confirmPassword) return res.status(400).json({ message: 'Fields with * are mandatory!' });

    const existingUser = await User.findOne({ email });
    if(existingUser) return res.status(400).json({ message: 'User already exists!' });

    if(password !== confirmPassword) return res.status(400).json({ message: 'Please make sure the passwords match!' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    res.status(200).json({ result: user, token });
}
