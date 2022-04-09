import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {
  public newEmployee = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const schema = Joi.object({
      firstName: Joi.string().alphanum().min(2).max(20).required(),
      lastName: Joi.string().alphanum().min(2).max(20).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),

      address: Joi.string().min(3).max(100).optional(),
      department_Id: Joi.number().required(),
      role_Id: Joi.number().required(),
      mobileNo: Joi.number().optional(),
      aadharId: Joi.number().integer().required(),
      date_Of_Joining: Joi.date().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    } else {
      next();
    }
  };

  public updateEmployee = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const schema = Joi.object({
      firstName: Joi.string().alphanum().min(2).max(20),
      lastName: Joi.string().alphanum().min(2).max(20),
      email: Joi.string().email(),
      password: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),

      address: Joi.string().min(3).max(100).optional(),
      department_Id: Joi.number(),
      role_Id: Joi.number(),
      mobileNo: Joi.number().optional(),
      aadharId: Joi.number().integer(),
      date_Of_Joining: Joi.date()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    } else {
      next();
    }
  };

  public loginUser = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    } else {
      next();
    }
  };

  public roleValidator = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const schema = Joi.object({
      roleName: Joi.string().alphanum().min(2).max(20).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    } else {
      next();
    }
  };

  public departmentValidator = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const schema = Joi.object({
      departmentName: Joi.string().alphanum().min(2).max(20).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    } else {
      next();
    }
  };

  public updateRole = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const schema = Joi.object({
      roleName: Joi.string().alphanum().min(2).max(20)
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    } else {
      next();
    }
  };

  public updateDepartment = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const schema = Joi.object({
      departmentName: Joi.string().alphanum().min(2).max(20)
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    } else {
      next();
    }
  };
}

export default UserValidator;
