import { Router } from "express";
import { postAppointment, showAppointmentsbyDay, showAppointmentsbyUser } from "../controllers/schedulesController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { scheduleSchema } from "../schemas/schemas.js";


const schedulesRouter = Router();

schedulesRouter.post("/schedules", validateSchema(scheduleSchema), validateToken, postAppointment);
schedulesRouter.get("/doctorSchedules/:doctorId", showAppointmentsbyDay);
schedulesRouter.get("/schedules", validateToken, showAppointmentsbyUser);

export default schedulesRouter;