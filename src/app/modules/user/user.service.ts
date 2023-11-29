import config from '../../config';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDb = async (password: string, studentData: Student) => {
  //create user object
  const userData: Partial<TUser> = {};

  //if student not given password,use default password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  //set manually generated id
  userData.id = ' 2030100001';

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }

  return newUser;
};

export const UserService = {
  createStudentIntoDb,
};
