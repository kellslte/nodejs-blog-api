import { asyncWrapper } from "../../lib/utils/asyncWrapper.js";
import { UnauthenticatedException } from "../../lib/utils/errors.utils.js";

export const getPosts = asyncWrapper( async ( req, res ) =>
{
    // if(!req.user) throw new UnauthenticatedException('User should be logged in to access this route');
    
    console.log(`This fetches a logged in user's posts`);
});