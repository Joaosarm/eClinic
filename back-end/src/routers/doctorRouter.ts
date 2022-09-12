import { Router } from "express";
import { postDoctor, showDoctors } from "../controllers/doctorController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { doctorSchema } from "../schemas/schemas.js";

const doctorRouter = Router();

doctorRouter.post("/doctors", validateSchema(doctorSchema), postDoctor);
doctorRouter.get("/doctors", showDoctors);

export default doctorRouter;