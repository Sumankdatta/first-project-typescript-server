import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewears/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(AcademicFacultyValidation.createAcademicValidationSchema),
  AcademicFacultyController.createAcademicFaculty,
);

router.get(
  '/academic-faculty',
  AcademicFacultyController.getAllAcademicFaculty,
);
router.get('/:facultyId', AcademicFacultyController.getSingleAcademicFaculty);
router.patch(
  '/:facultyId',
  validateRequest(AcademicFacultyValidation.updateAcademicValidationSchema),
  AcademicFacultyController.updateAcademicFacultyIntoDb,
);
export const academicFacultyRoute = router;
