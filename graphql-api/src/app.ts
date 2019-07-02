import * as express from 'express';
import * as cors from 'cors';
import * as grapahqlHTTP from 'express-graphql';

import db from './models/';
import schema from './graphql/schema';

class App {

    public express: express.Application;
    public corsOptions: cors.CorsOptions;

    constructor(){
        this.express = express();
        this.corsOptions = {
            origin: '*',
            methods: 'POST, GET, OPTIONS, DELETE',
            maxAge: 3600
        };
        this.middleware();
    }

    private middleware(): void{
        this.express.use(cors(this.corsOptions));

        this.express.use('/api',
            (req, res, next) => {
                req['context'] = {};
                req['context'].db = db;
                next();
            },

            grapahqlHTTP((req) => ({
                schema: schema,
                graphiql: process.env.NODE_ENV === 'development',
                context: req['context']
            }))
        );
    }

}

export default new App().express;
