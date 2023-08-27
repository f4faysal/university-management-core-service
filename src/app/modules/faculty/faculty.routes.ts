import express from 'express';
import { FacultyController } from './faculty.controller';

const router = express.Router();


router.get('/', FacultyController.getAllFromDB);
router.get('/:id', FacultyController.getByIdFromDB);
router.post('/', FacultyController.insertIntoDB);
router.patch('/:id', FacultyController.updateOneInDB);
router.delete('/:id', FacultyController.deteteByIdFromDB);


export const FacultyControllerRoutes = router;