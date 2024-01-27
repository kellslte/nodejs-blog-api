import jwtService from "jsonwebtoken";
import appConfig from "../../lib/config/app.config.js";
import { UnauthenticatedException } from "../../lib/utils/errors.utils.js";

const { jwt } = appConfig.provider;

const allowedRoutes = ["/"];

const authMiddleware = function (req, res, next) {
  try
  {
    // if ((allowedRoutes.includes(req.url) && ) &&
    //     (req.headers["authorization"] &&
    //     req.method === "GET")
    // ) {
    //   const authorization = req.headers["authorization"];

    //   if (!authorization)
    //     throw new UnauthenticatedException(
    //       "Invalid token or token missing from request"
    //     );

    //   const [type, token] = authorization.split(" ");

    //   if (!token && !type)
    //     throw new UnathorizedException(
    //       "Invalid token or token missing from request"
    //     );

    //   const user = jwtService.verify(token, jwt.secret);

    //   req.user = user;
    // }

    next();
  } catch (e) {
    next(e);
  }
};

export default authMiddleware;
