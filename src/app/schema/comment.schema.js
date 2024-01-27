import { Schema, model } from "mongoose";


export const CommentSchema = new Schema( {
    username: {
        type: 'string'
    },

    email: {
        type: 'string'
    },

    message: {
        type: 'string'
    }
}, { timestamps: true } );

export const Comment = model( 'Comment', CommentSchema );