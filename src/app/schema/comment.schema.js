import { Schema, Types, model } from "mongoose";
import { Post } from "./post.schema.js";


const CommentSchema = new Schema( {
    username: {
        type: 'string'
    },

    email: {
        type: 'string'
    },

    post: {
        type: Types.ObjectId,
        ref: Post
    },

    message: {
        type: 'string'
    }
}, { timestamps: true } );

export const Comment = model( 'Comment', CommentSchema );