/* 
title,
body,
excerpt,
featuredImage,
slug,
tags,
comments
*/

import { Schema, Types, model } from "mongoose";
import { Comment } from "./comment.schema.js";
import { User } from "./user.schema.js";
import { generateExcerpt } from "../../lib/utils/helpers.js";

const PostSchema = new Schema( {
    title: {
        type: String,
    },

    body: {
        type: String,
    },

    excerpt: {
        type: String
    },

    featuredImage: {
        type: String,
    },

    slug: {
        type: String,
        default: ''
    },

    tags: {
        type: String,
    },

    isPublished: {
        type: Boolean,
        default: false
    },

    comments: {
        type: [ Types.ObjectId ],
        ref: [Comment]
    },

    author: {
        type: Types.ObjectId,
        ref: User
    }
}, { timestamps: true} );

export const Post = model( 'Post', PostSchema );