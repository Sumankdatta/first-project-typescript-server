import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.get('/', StudentController.getAllStudent);
router.get('/:id', StudentController.getAStudent);
export const StudentRouts = router;
