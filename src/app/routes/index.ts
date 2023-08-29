import express from 'express';

import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemeterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { BuildingRoutes } from '../modules/building/building.routes';
import { CourseRoutes } from '../modules/course/course.routes';
import { FacultyRoutes } from '../modules/faculty/faculty.routes';
import { RoomRoutes } from '../modules/room/room.routes';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { studentRoutes } from '../modules/student/student.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/academic-semesters",
    route: AcademicSemeterRoutes
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes
  },
  {
    path: "/academic-departments",
    route: AcademicDepartmentRoutes
  },
  {
    path: "/faculties",
    route: FacultyRoutes
  },
  {
    path: '/students',
    route: studentRoutes
  },
  {
    path: '/buildings',
    route: BuildingRoutes
  },
  {
    path: '/rooms',
    route: RoomRoutes
  },
  {
    path: '/course',
    route: CourseRoutes
  },
  {
    path: '/courses',
    route: CourseRoutes
  },
  {
    path: '/semester-registration',
    route: semesterRegistrationRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
