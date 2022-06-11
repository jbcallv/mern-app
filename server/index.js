import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
    "mongodb+srv://admin:cL8ks680JCzA1phM@cluster0.fcj31.mongodb.net/merndb?retryWrites=true&w=majority"
);

app.listen(3001, () => {
    console.log("Server runs");
});