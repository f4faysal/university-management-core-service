import { AcademicSemester, Prisma } from "@prisma/client";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import prisma from "../../../shared/prisma";
import { IAcamdemicSemesterFilterList } from "./academicSemester.interface";
import { AcademicSemesterSearchAbleFields } from "./academicSemeter.contants";



// const prisma = new PrismaClient();

const insertIntoDB = async (academicSemesterData: AcademicSemester): Promise<AcademicSemester> => {
     const result = await prisma.academicSemester.create({
          data: academicSemesterData
     });
     return result;
}
// const getAllFormDB = async (
//      filters: IAcamdemicSemesterFilterList,
//      options: IPaginationOptions
// ): Promise<IGenericResponse<AcademicSemester[]>> => {

//      const { limit, page, skip } = paginationHelpers.calculatePagination(options);

//      const { searchTerm, ...filtersData } = filters;

//      const andCondition = []

//      if (searchTerm) {
//           andCondition.push({
//                OR: AcademicSemesterSearchAbleFields.map((field) => ({
//                     [field]: {
//                          contains: searchTerm,
//                          mode: 'insensitive'
//                     }
//                }))
//           })
//           if (Object.keys(filtersData).length > 0) {
//                andCondition.push({
//                     AND: Object.keys(filtersData).map((field) => ({
//                          [field]: {
//                               equals: (filtersData as any)[field]
//                          }
//                     }))
//                })
//           }

//           const wwhereCondition: Prisma.AcademicSemesterWhereInput = andCondition.length > 0 ? { AND: andCondition } : {};


//           const result = await prisma.academicSemester.findMany({
//                where: wwhereCondition,
//                skip,
//                take: limit,

//           });


//           const total = await prisma.academicSemester.count();
//           return {
//                meta: {
//                     total,
//                     page,
//                     limit
//                },
//                data: result
//           }
//      }
// }

const getAllFormDB = async (
     filters: IAcamdemicSemesterFilterList,
     options: IPaginationOptions
): Promise<IGenericResponse<AcademicSemester[]>> => {
     const { page, limit, skip } = paginationHelpers.calculatePagination(options);
     const { searchTerm, ...filterData } = filters;
     console.log(options)
     const andConditons = [];

     if (searchTerm) {
          andConditons.push({
               OR: AcademicSemesterSearchAbleFields.map((field) => ({
                    [field]: {
                         contains: searchTerm,
                         mode: 'insensitive'
                    }
               }))
          })
     }

     if (Object.keys(filterData).length > 0) {
          andConditons.push({
               AND: Object.keys(filterData).map((key) => ({
                    [key]: {
                         equals: (filterData as any)[key]
                    }
               }))
          })
     }

     /**
      * person = { name: 'fahim' }
      * name = person[name]
      * 
      */

     const whereConditons: Prisma.AcademicSemesterWhereInput =
          andConditons.length > 0 ? { AND: andConditons } : {};

     const result = await prisma.academicSemester.findMany({
          where: whereConditons,
          skip,
          take: limit,
          orderBy: options.sortBy && options.sortOrder
               ? {
                    [options.sortBy]: options.sortOrder
               }
               : {
                    createdAt: 'desc'
               }
     });

     const total = await prisma.academicSemester.count();

     return {
          meta: {
               total,
               page,
               limit
          },
          data: result
     }
}


const getDataById = async (id: string): Promise<AcademicSemester | null> => {
     const result = await prisma.academicSemester.findUnique({
          where: {
               id
          }
     })

     return result;
}

const updateOneInDB = async (
     id: string,
     payload: Partial<AcademicSemester>
): Promise<AcademicSemester> => {
     const result = await prisma.academicSemester.update({
          where: {
               id
          },
          data: payload
     });
     return result;
};

const deleteByIdFromDB = async (id: string): Promise<AcademicSemester> => {
     const result = await prisma.academicSemester.delete({
          where: {
               id
          }
     });
     return result;
};

export const AcademicSemesterService = {
     insertIntoDB,
     getAllFormDB,
     getDataById,
     updateOneInDB,
     deleteByIdFromDB

}