import express from 'express';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { FacultyControllerRoutes } from '../modules/faculty/faculty.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/academic-semesters",
    route: academicSemesterRoutes
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes
  },
  {
    path: "/academic-departments",
    route: AcademicDepartmentRouter
  },
  {
    path: "/faculties",
    route: FacultyControllerRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
