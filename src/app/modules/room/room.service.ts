import { Room } from '@prisma/client';
import prisma from '../../../shared/prisma';


const insertIntoDB = async (data: Room): Promise<Room> => {
     const result = await prisma.room.create({
          data,
          include: {
               building: true
          }
     });
     return result;
};



const getByIdFromDB = async (id: string): Promise<Room | null> => {
     const result = await prisma.room.findUnique({
          where: {
               id
          },
          include: {
               building: true
          }
     });
     return result;
};

const updateOneInDB = async (id: string, payload: Partial<Room>): Promise<Room> => {
     const result = await prisma.room.update({
          where: {
               id
          },
          data: payload,
          include: {
               building: true
          }
     });
     return result;
};

const deleteByIdFromDB = async (id: string): Promise<Room> => {
     const result = await prisma.room.delete({
          where: {
               id
          },
          include: {
               building: true
          }
     });
     return result;
};

export const RoomService = {
     insertIntoDB,
     getByIdFromDB,
     updateOneInDB,
     deleteByIdFromDB
};