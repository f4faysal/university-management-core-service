import { AcademicSemester, PrismaClient } from "@prisma/client";
import { IGenericResponse } from "../../../interfaces/common";



const prisma = new PrismaClient();

const insertIntoDB = async (academicSemesterData: AcademicSemester): Promise<AcademicSemester> => {
     const result = await prisma.academicSemester.create({
          data: academicSemesterData
     });
     return result;
}
const getAllFormDB = async (): Promise<IGenericResponse<AcademicSemester[]>> => {
     const result = await prisma.academicSemester.findMany();


     const total = await prisma.academicSemester.count();
     return {
          meta: {
               total,
               page: 1,
               limit: 10
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

export const academicSemesterService = {
     insertIntoDB,
     getAllFormDB,
     getDataById,
     updateOneInDB,
     deleteByIdFromDB

}