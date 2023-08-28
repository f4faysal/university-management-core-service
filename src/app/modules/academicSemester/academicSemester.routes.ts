import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemster.controller';
import { academicSemesterValidation } from './academicSemster.validation';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFormDB)
router.get('/:id', AcademicSemesterController.getDataById)
router.post(
     '/',
     validateRequest(academicSemesterValidation.create),
     AcademicSemesterController.insertIntoDB
)

router.patch(
     '/:id',
     validateRequest(academicSemesterValidation.update),
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
     AcademicSemesterController.updateOneInDB
);

router.delete(
     '/:id',
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
     AcademicSemesterController.deleteByIdFromDB
);

export const AcademicSemeterRoutes = router;