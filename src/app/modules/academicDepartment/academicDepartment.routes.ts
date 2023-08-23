
import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post('/', AcademicDepartmentController.insertIntoDB);

export const AcademicDepartmentRouter = router;