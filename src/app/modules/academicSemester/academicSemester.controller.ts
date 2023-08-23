import { AcademicSemester } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { IGenericResponse } from "../../../interfaces/common";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { AcademicSemesterService } from "./academicSemester.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
     const result = await AcademicSemesterService.insertIntoDB(req.body);

     sendResponse<AcademicSemester>(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Academic Semester added successfully",
          data: result
     })
})

const getAllFormDB = catchAsync(async (req: Request, res: Response) => {

     const filters = pick(req.query, ["title", "startMonth", "searchTerm"])
     const options = pick(req.query, ["sortBy", "sortOder", "limit", "page"])

     // console.log(filters, options)

     const result = await AcademicSemesterService.getAllFormDB(filters, options);

     sendResponse<IGenericResponse<AcademicSemester[]>>(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Academic Semester fetched successfully",
          data: result
     })
})

const getDataById = catchAsync(async (req: Request, res: Response) => {
     const result = await AcademicSemesterService.getDataById(req.params.id);
     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Academic Semster data fetched!!",
          data: result
     })
})


const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
     const { id } = req.params;
     const result = await AcademicSemesterService.updateOneInDB(id, req.body);
     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Academic Semster updated successfully',
          data: result
     });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
     const { id } = req.params;
     const result = await AcademicSemesterService.deleteByIdFromDB(id);
     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Academic Semster delete successfully',
          data: result
     });
});


export const AcademicSemesterController = {
     insertIntoDB,
     getAllFormDB,
     getDataById,
     updateOneInDB,
     deleteByIdFromDB
}