import { StudentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Academic department update successfully',
    data: result,
  });
});

const getAStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getASingleStudent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Academic department update successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudent,
  getAStudent,
};
