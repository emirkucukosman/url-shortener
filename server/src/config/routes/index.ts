import { Application } from 'express'

import URLRouter from './url'

export default (app: Application) => {
    app.use('/url', URLRouter);
}