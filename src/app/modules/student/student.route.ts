import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middlewears/validateRequest';
import { studentValidations } from './student.zod.validation';

const router = express.Router();

router.get('/:studentId', StudentController.getSingleStudent);
router.patch(
  '/:studentId',
  validateRequest(studentValidations.updateStudentValidationSchema),
  StudentController.updateStudent,
);
router.delete('/:studentId', StudentController.deleteStudent);
router.get('/', StudentController.getAllStudent);

export const StudentRouts = router;
