import { CreatePostRequest } from '../requests/create-post.request.js'
import { UpdatePostRequest } from "../requests/update-post.request.js";
import asyncWrapper from "express-async-handler";
import { ValidationException } from "../../lib/utils/errors.utils.js";
import validateInput from "../../lib/utils/validateInput.js";
import * as postService from '../services/post.service.js';

export const getPosts = asyncWrapper( async ( req, res ) =>
{
    let posts;

    if ( !req.user )
    {
        if ( req.params.userId )
        {
            posts = await postService.getPublishedPosts( req.params.userId );
            
            return res.status(200).json({
              success: true,
              message: "Posts retrieved successfully",
              data: {
                posts: posts,
              },
            });
        }
        posts = await postService.getPublishedPosts();

        return res.status(200).json({
          success: true,
          message: "Posts retrieved successfully",
          data: {
            posts: posts,
          },
        });

    } else if ( req.user )
    {
        posts = await postService.getPosts(req.user.sub);

        return res.status(200).json({
          success: true,
          message: "Posts retrieved successfully",
          data: {
            posts: posts,
          },
        });
    }
} );

export const createPost = asyncWrapper( async ( req, res, next ) =>
{
    try {
        /* 
        title,
        body,
        tags,
        author
        */
        // validate input
        const payload = {
            author: req.user.sub,
            ...req.body
        };
        const errors = validateInput( CreatePostRequest, payload );
    
        if ( errors ) throw new ValidationException( errors, "The request failed with the following errors" );
    
        const post = await postService.createPost( payload );
    
        return res.status( 201 ).json( {
            success: true,
            message: 'Post created successfully',
            data: {
                post: post
            }
        })
        
    } catch (error) {
        next(error)   
    }
} );

export const updatePost = asyncWrapper( async ( req, res, next ) =>
{
    try {
      /* 
   slug,
    title,
    body,
    tags
   */
      // validate input
      const errors = validateInput(UpdatePostDto, req.body);

      if (errors)
        throw new ValidationException(
          errors,
          "The request failed with the following errors"
            );

      const post = await postService.updatePost(req.body);

      return res.status(200).json({
        success: true,
        message: "Post created successfully",
        data: {
          post: post,
        },
      });
    } catch (error) {
        next( error );
    }
} );

export const deletePost = asyncWrapper( async ( req, res ) =>
{
    await postService.deletePost( req.params.post );

    return res.status( 204 ).json( {
        success: true,
        message: 'Deleted post successfully'
    } );
} );