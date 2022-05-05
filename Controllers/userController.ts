import express from 'express';

const dataBase = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Raafat',
            email: 'raafat@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
    ]
};
const register = (req: express.Request, res: express.Response) => {
    const { name, email, password } = req.body;
    dataBase.users.push({
        id: '125',
        name:name,
        email:email,
        password:password,
        entries:0,
        joined: new Date()
    });
    res.json(dataBase.users[dataBase.users.length - 1]);
}
const login = (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;
    if(email === dataBase.users[0].email && password === dataBase.users[0].password){
        res.json(dataBase.users[0]);
    }
    else{
        res.status(400).json('error logging in');
    }
}

const getAllUsers = (req: express.Request, res: express.Response) => {
    res.json(dataBase.users);
}

const getUser = (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    let found = false;
    dataBase.users.forEach(user => {
        if(user.id === id){
            found = true;
            res.json(user);
        }
    });
    if(!found){
        res.status(404).json('no user found');
    }
}

const numOfImages = (req: express.Request, res: express.Response) => {
    const {id} = req.body; 
    let found = false;
    console.log("helllo",id);
    dataBase.users.forEach(user => {
        if(user.id === id){
            found = true;
            user.entries++;
            res.json(user.entries);
        }
    });
    if(!found){
        res.status(404).json('no user found');
    }
}


export  {register, login,getUser,getAllUsers,numOfImages};