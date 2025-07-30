import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

const UserSchem = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true, index: true, lowercase: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    fullname: { type: String, required: true, unique: true, index: true },
    avatar: { type: String, required: true }, // cloudniary img 
    coverImg: { type: String },
    watchhistory: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
    password: { type: String, required: [true, 'Password is Required'] },
    refreshtoken: { type: string }
}, { timestamps: true });

UserSchem.pre('save', async function (next) {
    if (this.isModified('password')) return next()
    this.password = bcrypt.hash(this.password, 10);
    next()
})


UserSchem.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}


UserSchem.methods.generateAcessToken = function () {
    jwt.sign(
        {
            id: this.id
            , email: this.email
            , username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRE,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIR
        }
    )
}
UserSchem.methods.generateRefreshToken = function () {
    jwt.sign({ id: this.id },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIR
        }
    )
}
export const User = mongoose.model("User", UserSchem) 