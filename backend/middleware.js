import { JWT_SECRET } from './config.js';
import jwt from 'jsonwebtoken';

const authmiddlaware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({
      message: "Unauthorized"
    })
  }

  const token = authHeader.split(' ')[1];

  try {

    const decode = jwt.verify(token, JWT_SECRET);

    if (decode.userId) {
      req.userId = decode.userId;
      next();
    } else {
      res.status(403).json({
        message: "Invalid token"
      })
    }


  } catch (error) {
    res.status(403).json({
      message: "Invalid token"
    });
  }

}

export { authmiddlaware }

