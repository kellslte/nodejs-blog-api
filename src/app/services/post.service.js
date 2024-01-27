import { generateExcerpt, slugify } from "../../lib/utils/helpers.js";
import { Post } from "../schema/post.schema.js";

// get all published articles/posts or particluar user's published articles
export const getPublishedPosts = async function (userId) {
  let posts;

  if (userId) {
    posts = await Post.find({
      author: userId,
      isPublished: true,
    })
      .populate("comments")
      .exec();

    return posts;
  }

  posts = await Post.find({ isPublished: true }).populate("comments").exec();

  return posts;
};

// get a particulars user's articles or posts
// this only works for a logged in user
export const getPosts = async function (userId) {
  return await Post.find({
    author: userId,
  })
    .populate("comments")
    .exec();
};

// create a new post
export const createPost = async function (payload) {
  const post = new Post(payload);
  await post.save();

  return post;
};

// update a post
export const updatePost = async function (payload) {
  // this is the rest operator
  const { slug, title, body, isPublished } = payload;

  const newPost = {
    title,
    body,
    isPublished,
    slug: slugify(title),
    excerpt: generateExcerpt(body),
  };

  const post = await Post.findOneAndUpdate({ slug }, newPost, {
    new: true,
  });

  return post;
};

// delete a post
export const deletePost = async function (postId) {
  return await Post.findOneAndDelete({ _id: postId });
};
