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

router.get(
  '/get-academic-semester',
  academicSemesterController.getAllAcademicSemester,
);
router.get(
  '/:semesterId',
  academicSemesterController.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    academicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterController.updateAcademicSemester,
);

export const academicSemesterRoute = router;
