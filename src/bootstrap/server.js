import express from 'express'
import { createServer} from 'http'
import errorMiddleware from '../app/middleware/error.middleware.js';
import { authRouter } from '../routes/auth.route.js';
import { postRouter } from '../routes/post.route.js';

// defined the express app
const app = express(); 
const server = createServer( app );

// define application level middleware
app.use( express.json() )
app.use( express.urlencoded( { extended: true } ) )

// define route middleware
app.use( "/api/v1/auth", authRouter );
app.use( '/api/v1/posts', postRouter );


// global error handler
app.use( errorMiddleware );


// export app and server 
export
{
    app, server
}