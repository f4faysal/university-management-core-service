import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';


const router = express.Router();

router.get('/',
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),

     AcademicFacultyController.getAllFromDB);
router.get('/:id',
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
     AcademicFacultyController.getByIdFromDB);

router.post(
     '/',
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),

     validateRequest(AcademicFacultyValidation.create),
     AcademicFacultyController.insertIntoDB
);

export const AcademicFacultyRoutes = router;