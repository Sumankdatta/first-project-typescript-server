import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentSchema from './student.zod.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const zodParsedData = studentSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDb(zodParsedData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDb();
    res.status(200).json({
      success: true,
      message: 'Student are retrieve successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.getASingleStudent(id);
    res.status(200).json({
      success: true,
      message: 'Single Student is retrieve successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  getAStudent,
};
