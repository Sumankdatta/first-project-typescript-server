import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

const getAllStudent = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentFromDb();
  res.status(200).json({
    success: true,
    message: 'Student are retrieve successfully',
    data: result,
  });
});

const getAStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.getASingleStudent(id);
    res.status(200).json({
      success: true,
      message: 'Single Student is retrieve successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  getAllStudent,
  getAStudent,
};
