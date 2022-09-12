import { Router } from "express";
import { postDays, postShifts, showDays, showShifts } from "../controllers/timeController.js";

const timeRouter = Router();

timeRouter.post("/days", postDays);
timeRouter.get("/days/:doctorId", showDays);
timeRouter.post("/shifts", postShifts);
timeRouter.get("/shifts/:doctorId", showShifts);

export default timeRouter;