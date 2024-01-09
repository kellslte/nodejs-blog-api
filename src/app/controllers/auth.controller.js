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
} )

export const forgotPassword = asyncWrapper( async ( req, res ) => { } );

export const resetPassword = asyncWrapper( async ( req, res ) => { } );