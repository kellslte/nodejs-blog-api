import * as userService from './user.service.js'
import { NotFoundException} from '../../lib/utils/errors.utils.js'

export const createNewUser = async function ( payload )
{
    
 }

export const login = async function ( payload )
{
    // confirm that a user account exists with the email passed
    const user = await userService.findByEmail( payload.email );

    if ( !user ) throw new NotFoundException( 'A user with the provided email does not exist' );

    // confirm that the password passed is the same as the on on file

    // generate a token to serve as a gatepass for the user
}

export const forgotPassword = async function(email){}

export const resetPassword = async function(payload){}