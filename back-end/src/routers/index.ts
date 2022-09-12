import { Router } from "express";
import authRouter from "./authRouter.js";
import doctorRouter from "./doctorRouter.js";
import schedulesRouter from "./schedulesRouter.js";
import timeRouter from "./timeRouter.js";


const router = Router();

router.use(authRouter);
router.use(doctorRouter);
router.use(timeRouter);
router.use(schedulesRouter);

export default router;