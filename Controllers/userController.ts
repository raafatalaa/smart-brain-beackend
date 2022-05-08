import express from 'express';
import User from '../Models/user';

const register = async(req: express.Request, res: express.Response) => {
    try{
    const { name, email, password } = req.body;
    const newUser =await new User({name, email, password}).save();
    res.json(newUser);
    }catch(err){
        res.status(400).json({message: err});
    }
}
const login = async(req: express.Request, res: express.Response) => {
    const { email, password } = req.body;
    const user =await User.findOne({email, password});
    if(user){
        res.json(user);
    }
    else{
        res.status(400).json('error logging in');
    }
}

const getAllUsers = async(req: express.Request, res: express.Response) => {
    const users = await User.find({});
    res.json(users);
}

const getUser = async(req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if(user){
        res.json(user);
    }
    else{
        res.status(404).json('no user found');
    }
}

const numOfImages = async(req: express.Request, res: express.Response) => {
    try{
    const {id} = req.body; 
    const user =await User.findByIdAndUpdate(id, {$inc: {entries: 1}});
    res.json(user);
    }catch(err){
        res.status(400).json({message: err});
    }
}


export  {register, login,getUser,getAllUsers,numOfImages};