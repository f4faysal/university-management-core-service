import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterController } from "./academicSemester.controller";
import { academicSemesterValidation } from "./academicSemeter.validation";

const router = express.Router();


router.get("/", AcademicSemesterController.getAllFormDB);
router.get('/:id', AcademicSemesterController.getDataById)
router.post("/", validateRequest(academicSemesterValidation.create), AcademicSemesterController.insertIntoDB);

router.patch(
     '/:id',
     validateRequest(academicSemesterValidation.update),
     AcademicSemesterController.updateOneInDB
);

router.delete(
     '/:id',
     AcademicSemesterController.deleteByIdFromDB
);
export const academicSemesterRoutes = router;