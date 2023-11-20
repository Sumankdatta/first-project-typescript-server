import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDb(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is create successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
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
    console.log(reportError);
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
