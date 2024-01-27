import * as authService from '../services/auth.service.js'
import { LoginRequest } from '../requests/login.request.js'
import { RegisterRequest } from '../requests/register.request.js'
import { ValidationException } from "../../lib/utils/errors.utils.js";
import validateInput from "../../lib/utils/validateInput.js";
import asyncWrapper from "express-async-handler";


export const login = asyncWrapper( async ( req, res ) =>
{
    // validate the input
    const errors = validateInput( LoginRequest, req.body );
    
    // if we have errors in out request
    if ( errors && typeof errors === 'object' ) throw new ValidationException(errors, "The request failed with the following errors");

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
  // validate the input
  const errors = validateInput(RegisterRequest, req.body);

  // if we have errors in out request
  if (errors && typeof errors === "object")
    throw new ValidationException(
      errors,
      "The request failed with the following errors"
        );
    
  // handle creation of new accounts
  const user = await authService.createNewUser(req.body);

  return res.status(201).json({
    success: true,
    message: "User account created successfully",
    data: {
      user: user,
    },
  });
} )

export const forgotPassword = asyncWrapper( async ( req, res ) => { } );

export const resetPassword = asyncWrapper( async ( req, res ) => { } );