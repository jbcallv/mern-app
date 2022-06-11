import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.listen(3001, () => {
    console.log("Server runs");
});