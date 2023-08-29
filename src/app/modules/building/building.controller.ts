import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BuildingService } from "./building.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
     const result = await BuildingService.insertIntoDB(req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Building inserted successfully",
          data: result
     })
});


const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
     const { id } = req.params;
     const result = await BuildingService.getByIdFromDB(id);
     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Building fetched successfully',
          data: result
     });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
     const { id } = req.params;
     const result = await BuildingService.updateOneInDB(id, req.body);
     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Building updated successfully',
          data: result
     });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
     const { id } = req.params;
     const result = await BuildingService.deleteByIdFromDB(id);
     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Building delete successfully',
          data: result
     });
});






export const BuildingController = {
     insertIntoDB,
     getByIdFromDB,
     updateOneInDB,
     deleteByIdFromDB
}