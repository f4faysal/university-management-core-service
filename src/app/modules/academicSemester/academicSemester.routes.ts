import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterController } from "./academicSemster.controller";
import { academicSemesterValidation } from "./academicSemster.validation";

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