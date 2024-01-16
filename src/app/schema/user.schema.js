import { Schema, model } from 'mongoose';

export const UserSchema = new Schema( {
    name: {
        type: 'string',
    },

    email: {
        type: 'string',
    },

    password: {
        type: 'string',
    }
}, { timestamps: true});

export const User = model( 'User', UserSchema );
