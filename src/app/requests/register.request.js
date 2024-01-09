import joi from 'joi'

export const RegisterRequest = joi.object({
    name: joi.string().alphanum().required(),
    email: joi.string().email( {
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
    password: joi.string().pattern( new RegExp( "^[a-zA-Z0-9]{3,30}$" ) ),
    confirmPassword: joi.ref( 'password' )
});