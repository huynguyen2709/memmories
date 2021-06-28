import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json( {limit: "30mb", extended: 'true'} ));
app.use(bodyParser.urlencoded( {limit: "30mb", extended: 'true'} ));
app.use(cors());

const CONNECTion_URL = 'mongodb+srv://memories_database:rm!t567890@cluster0.md3wr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

