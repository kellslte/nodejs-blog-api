import { Router } from "express";
import authMiddleware from "../app/middleware/auth.middleware.js";
import { getPosts, createPost, updatePost, deletePost } from "../app/controllers/post.controller.js";
import gateMiddleware from "../app/middleware/authorization.middleware.js";
const router = new Router();

// all published posts
// router.get( '/', );

// all of the user's posts
router.get( "/", authMiddleware, getPosts );

/* 
Execution context
*/

router.post( '/', authMiddleware,  createPost);

router.put( '/:slug', authMiddleware, updatePost );
router.delete('/:post', authMiddleware, deletePost );

export const postRouter = router;