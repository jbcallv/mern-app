import express from 'express';
import mongoose from 'mongoose';
import UserModel from './models/Users.js'

const app = express();

app.use(express.json());

mongoose.connect(
    "mongodb+srv://admin:cL8ks680JCzA1phM@cluster0.fcj31.mongodb.net/merndb?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/addUsers", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001, () => {
    console.log("Server runs");
});