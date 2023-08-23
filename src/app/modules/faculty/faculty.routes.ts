import express from 'express';
import { FacultyController } from './faculty.controller';

const router = express.Router();


router.post('/', FacultyController.insertIntoDB);


export const FacultyControllerRoutes = router;