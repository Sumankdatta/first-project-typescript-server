import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewears/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';

const router = express.Router();
router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.createAcademicValidationSchema),
  academicSemesterController.createAcademicSemester,
);

export const academicSemesterRoute = router;
