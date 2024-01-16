import { asyncWrapper } from "../../lib/utils/asyncWrapper.js";
import * as authService from '../services/auth.service.js'


export const login = asyncWrapper( async ( req, res ) =>
{
    const token = await authService.login( req.body );

    return res.status(200).json({
        success: true,
        message: 'Login successful!',
        authorization: {
            token: token,
            type: "bearer"
        }
    })
} );

export const register = asyncWrapper( async ( req, res ) =>
{
    // handle creation of new accounts
    const user = await authService.createNewUser( req.body );

    return res.status( 201 ).json( {
        success: true,
        message: 'User account created successfully',
        data: {
            user: user
        }
    })
} )

export const forgotPassword = asyncWrapper( async ( req, res ) => { } );

export const resetPassword = asyncWrapper( async ( req, res ) => { } );