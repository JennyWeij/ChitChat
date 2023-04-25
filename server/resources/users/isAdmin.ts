import { NextFunction, Request, Response } from 'express';

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.user && req.session.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. You are not an admin.' });
  }
}