import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { facultyFilterableFields } from "./faculty.contants";
import { FacultyService } from "./faculty.service";


const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
     const result = await FacultyService.insertIntoDB(req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Faculty added successfully",
          data: result
     })
})

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
     const result = await FacultyService.getByIdFromDB(req.params.id);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Faculty fetched successfully",
          data: result
     })
})
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
     const filters = pick(req.query, facultyFilterableFields);
     const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
     const result = await FacultyService.getAllFromDB(filters, options);
     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Faculties fetched successfully',
          meta: result.meta,
          data: result.data
     });
})

const deteteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
     const result = await FacultyService.deteteByIdFromDB(req.params.id);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Faculty deleted successfully",
          data: result
     })
})

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
     const { id } = req.params;
     const result = await FacultyService.updateOneInDB(id, req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Faculty updated successfully",
          data: result
     })
})


export const FacultyController = {
     insertIntoDB,
     getByIdFromDB,
     getAllFromDB,
     deteteByIdFromDB,
     updateOneInDB
}