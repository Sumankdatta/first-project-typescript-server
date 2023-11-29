import express from 'express';
import { UserController } from './user.controller';

import { studentValidations } from '../student/student.zod.validation';
import validateRequest from '../../middlewears/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
