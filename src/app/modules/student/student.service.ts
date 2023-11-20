import { StudentModel } from './student.model';
import { Student } from './student.interface';

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getASingleStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentFromDb,
  getASingleStudent,
};
