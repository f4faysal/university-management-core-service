import { AcademicSemester } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { IGenericResponse } from "../../../interfaces/common";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { academicSemesterService } from "./academicSemester.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
     const result = await academicSemesterService.insertIntoDB(req.body);

     sendResponse<AcademicSemester>(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Academic Semester added successfully",
          data: result
     })
})

const getAllFormDB = catchAsync(async (req: Request, res: Response) => {
     const result = await academicSemesterService.getAllFormDB();

     sendResponse<IGenericResponse<AcademicSemester[]>>(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Academic Semester fetched successfully",
          data: result
     })
})

export const academicSemesterController = {
     insertIntoDB,
     getAllFormDB
}