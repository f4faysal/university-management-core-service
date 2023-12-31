import { z } from "zod";

const create = z.object({
     body: z.object({
          year: z.number({
               required_error: "Year is required"
          }).min(2000).max(2030),
          title: z.string({
               required_error: "Title is required"
          }).min(3).max(8),
          code: z.string({
               required_error: "Code is required"
          }).min(2).max(2),
          startMonth: z.string({
               required_error: "Start Month is required"
          }),
          endMonth: z.string({
               required_error: "End Month is required"
          }),
     })
})
const update = z.object({
     body: z.object({
          title: z.string().optional(),
          code: z.string().optional(),
          year: z.number().optional(),
          startMonth: z.string().optional(),
          endMonth: z.string().optional()
     })
});
export const academicSemesterValidation = {
     create,
     update
}