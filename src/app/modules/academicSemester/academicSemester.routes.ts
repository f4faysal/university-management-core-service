import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicSemesterController } from "./academicSemester.controller";
import { academicSemesterValidation } from "./academicSemeter.validation";

const router = express.Router();


router.post("/", validateRequest(academicSemesterValidation.create), academicSemesterController.insertIntoDB);

router.get("/", academicSemesterController.getAllFormDB);

export const academicSemesterRoutes = router;