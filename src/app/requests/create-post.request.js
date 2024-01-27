import Joi from 'joi'

export const CreatePostRequest = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  author: Joi.string().required(),
  tags: Joi.array().items(Joi.string().required()),
});