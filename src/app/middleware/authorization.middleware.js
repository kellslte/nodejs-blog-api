import { UnauthorizedException } from "../../lib/utils/errors.utils.js";

const roles = [
    'author',
    'admin'
];

const gateMiddleware = function ( req, res, next )
{
    try
    {
        // we want to make sure the user has the correct permissions
        /*
        permissions or roles 
        permissions and roles
        */
        if ( !roles.includes( req.user.role ) ) throw new UnauthorizedException("You do not have the persmission to access this route");
        
        next();
    } catch (e) {
        next( e );
    }
}

export default gateMiddleware;