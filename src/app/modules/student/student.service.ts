import { StudentModel } from './student.model';

const getAllStudentFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getASingleStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  getAllStudentFromDb,
  getASingleStudent,
};
