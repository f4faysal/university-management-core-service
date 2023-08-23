import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AcademicFacultyService } from "./academicFaculty.service";


const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
     const result = await AcademicFacultyService.
          insertIntoDB(req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Academic Faculty created successfully",
          data: result
     })
})

export const AcademicFacultyController = {
     insertIntoDB
}
