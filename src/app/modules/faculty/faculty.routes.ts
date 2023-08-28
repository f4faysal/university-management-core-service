import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { FacultyController } from './faculty.controller';

const router = express.Router();


router.get('/',
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
     FacultyController.getAllFromDB);
router.get('/:id',
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),

     FacultyController.getByIdFromDB);
router.post('/',
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
     FacultyController.insertIntoDB);
router.patch('/:id',
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
     FacultyController.updateOneInDB);
router.delete('/:id',
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
     FacultyController.deteteByIdFromDB);


export const FacultyControllerRoutes = router;