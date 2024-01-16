import { ApplicationException, BadRequestException, NotFoundException, UnauthenticatedException, UnauthorizedException, ValidationException } from "../../lib/utils/errors.utils.js";

const errorMiddleware = ( err, req, res, next ) =>
{
    if (err instanceof ValidationException) {
      return res.status(err.statuscode).json({
        success: false,
        message: err.message,
        errors: err.errors,
      });
    } else if (
      err instanceof UnauthenticatedException ||
      err instanceof UnauthorizedException ||
      err instanceof NotFoundException ||
      err instanceof BadRequestException ||
      err instanceof ApplicationException
    ) {
      return res.status(err.statuscode).json({
        success: false,
        message: err.message,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: err.message,
        stack: (process.env.NODE_ENV === development) && err.stack
      });
    }
}

/* 
process = object - properties and methods
env = object we can add variables or properties to it

*/

export default errorMiddleware;