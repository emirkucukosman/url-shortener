import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dbConfig from '../db/config'
import { notFound, errorHandler } from './utils/express/response'
import configureRoutes from './config/routes'

const { host, database, settings } = dbConfig;

export default async (): Promise<express.Application> => {

    try {        
        await mongoose.connect(`${host}/${database}`, settings);
    } catch (error) {
        console.error(error);        
    }

    const app = express();

    app.use(cors())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json());

    configureRoutes(app);

    app.use(notFound);
    app.use(errorHandler);

    return app;
}