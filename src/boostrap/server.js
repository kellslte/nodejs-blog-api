import express from 'express'
import { createServer} from 'http'
import { authRouter } from '../routes/auth.route.js';
import errorMiddleware from '../app/middleware/error.middleware.js';

// defined the epxress app
const app = express(); 
const server = createServer( app );

// define application level middleware
app.use( express.json() )
app.use( express.urlencoded( { extended: true } ) )

// define route middleware
app.use("/api/v1/auth", authRouter)


// global error handler
app.use( errorMiddleware );


// export app and server 
export
{
    app, server
}