import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserService.createStudentIntoDb(password, studentData);
    // res.status(200).json({
    //   success: true,
    //   message: 'Student create successfully',
    //   data: result,
    // });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student create successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent,
};
