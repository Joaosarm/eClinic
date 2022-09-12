import { Request, Response } from "express";
import * as doctorServices from "../services/doctorServices.js";

export async function postDoctor(req: Request, res: Response) {
    const userData = req.body;
    await doctorServices.postDoctor(userData);
    res.sendStatus(201);
}

export async function showDoctors(req: Request, res: Response) {
    const doctors = await doctorServices.showDoctors();
    res.status(200).send(doctors);
}