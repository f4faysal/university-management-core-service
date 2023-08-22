import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicSemesterController } from "./academicSemester.controller";
import { academicSemesterValidation } from "./academicSemeter.validation";

const router = express.Router();


router.get("/", academicSemesterController.getAllFormDB);
router.get('/:id', academicSemesterController.getDataById)
router.post("/", validateRequest(academicSemesterValidation.create), academicSemesterController.insertIntoDB);

router.patch(
     '/:id',
     validateRequest(academicSemesterValidation.update),
     academicSemesterController.updateOneInDB
);

router.delete(
     '/:id',
     academicSemesterController.deleteByIdFromDB
);
export const academicSemesterRoutes = router;