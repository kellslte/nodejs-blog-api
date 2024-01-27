import Joi from 'joi'

export const RegisterRequest = Joi.object({
    name: Joi.string().alphanum().required(),
    email: Joi.string().email( {
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
    password: Joi.string().pattern( new RegExp( "^[a-zA-Z0-9]{3,30}$" ) ),
    confirmPassword: Joi.ref( 'password' )
});