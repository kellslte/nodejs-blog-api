import jwt from 'jsonwebtoken'
import { config} from 'dotenv'
config();

const authMiddleware = function (req, res)
{
    try
    { 
        const authorization = req.headers['authorization'];

        const [ type, token ] = authorization.split( ' ' );

        if(!token || !type) throw new UnathorizedException('Invalid token or token missing from request');

        const user = jwt.verify(token, process.env.JWT_SECRET);

        req.user = user;
        next();
    }
    catch ( e )
    {
        next( e );
    }
}