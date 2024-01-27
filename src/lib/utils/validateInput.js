export default function (schema, input) {
  let errors = {};

  const { error, value } = schema.validate(input, { abortEarly: false });

  if (error) {
    //throw new Error( error.details[ 0 ].message );
    error.details.forEach((error) => {
      errors[error.context?.key] = error.message;
    });

    return errors;
  }
  return;
}
