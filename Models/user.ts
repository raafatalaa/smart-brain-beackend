import { Schema, model, syncIndexes } from 'mongoose';

const userSchema = new Schema({
    name: { type: String , required : [true, "Please Enter User Name"] },
    email: { type: String, unique: true , required : [true, "Please Enter User Name"]},
    password: { type: String , required : [true, "Please Enter User Password"] }, 
    entries: { type: Number , default : 0 },
    joined:{ type : Date, default:Date.now}},
    { timestamps: true, toJSON: { virtuals: true } }
);

const User = model('User', userSchema);

export default User;