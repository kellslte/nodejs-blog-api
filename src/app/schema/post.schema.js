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
import { Comment, CommentSchema } from "./comment.schema.js";
import { User } from "./user.schema.js";
import { generateExcerpt, slugify } from "../../lib/utils/helpers.js";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },

    excerpt: {
      type: String,
    },

    featuredImage: {
      type: String,
      default: "",
    },

    slug: {
      type: String,
    },

    tags: {
      type: [ String ],
      default: []
      //required: true,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    comments: [
      {
        types: Types.ObjectId,
        ref: CommentSchema
      }
    ],

    author: {
      type: Types.ObjectId,
      ref: User,
      required: true,
    },
  },
  { timestamps: true }
);

// set up the middleware
PostSchema.pre( 'save', function ( next, options )
{
    // create the slug
    this.slug = slugify( this.title );
    // create the excerpt 
  this.excerpt = generateExcerpt( this.body );
  
  next();
} );

export const Post = model( 'Post', PostSchema );