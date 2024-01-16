import * as userService from './user.service.js'
import { BadRequestException, NotFoundException } from '../../lib/utils/errors.utils.js'
import jwtService from 'jsonwebtoken'
import argon from 'argon2'
import appConfig from '../../lib/config/app.config.js';

const { jwt } = appConfig.provider;

export const createNewUser = async function ( payload )
{
    // check that the user does not exist
    const userRecord = await userService.findByEmail( payload.email );

    // if the user record exists we will throw an error and stop the code from running
    if ( userRecord ) throw new BadRequestException( 'A user already exists with that email' );

    const { name, email } = payload;

    return await userService.create({
        name, 
        email,
        password: await argon.hash( payload.password )
    })
 }


export const login = async function ( payload )
{
    // confirm that a user account exists with the email passed
    const user = await userService.findByEmail( payload.email );

    if ( !user ) throw new NotFoundException( 'A user with the provided email does not exist' );

    // confirm that the password passed is the same as the on on file
    if(!(await argon.verify(user.password, payload.password))) throw new BadRequest(' Invalid user credentials, please check the email or password and try again')

    // generate a token to serve as a gatepass for the user
    return jwtService.sign( {
        sub: user.id,
        name: user.name,
        email: user.email,
        role: 'author'
    }, jwt.secret, {
        expiresIn: jwt.expiresIn
    });
}

export const forgotPassword = async function(email){}

export const resetPassword = async function(payload){}