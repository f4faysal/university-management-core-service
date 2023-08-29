import { Building } from "@prisma/client";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (data: Building): Promise<Building> => {
     const result = await prisma.building.create({
          data
     })
     return result;
}


const getByIdFromDB = async (id: string): Promise<Building | null> => {
     const result = await prisma.building.findUnique({
          where: {
               id
          }
     });
     return result;
};


const updateOneInDB = async (id: string, payload: Partial<Building>): Promise<Building> => {
     const result = await prisma.building.update({
          where: {
               id
          },
          data: payload
     });
     return result;
};

const deleteByIdFromDB = async (id: string): Promise<Building> => {
     const result = await prisma.building.delete({
          where: {
               id
          }
     });
     return result;
};

export const BuildingService = {
     insertIntoDB,
     getByIdFromDB,
     updateOneInDB,
     deleteByIdFromDB
}
