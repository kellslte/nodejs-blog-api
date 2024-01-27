import Joi from 'joi'

export const UpdatePostRequest = Joi.object({
  title: Joi.string().required(),
  slug: Joi.string().required(),
  body: Joi.string().required(),
  // tags: Joi.array().items( Joi.string().required() ),
  isPublished: Joi.boolean().required(),
});