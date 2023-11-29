import { StudentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';

const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDb();
  res.status(200).json({
    success: true,
    message: 'Student are retrieve successfully',
    data: result,
  });
});

const getAStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getASingleStudent(id);
  res.status(200).json({
    success: true,
    message: 'Single Student is retrieve successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudent,
  getAStudent,
};
