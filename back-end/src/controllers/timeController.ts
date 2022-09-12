import { Request, Response } from "express";
import * as timeServices from "../services/timeServices.js";

export async function postDays(req: Request, res: Response) {
    const data = req.body;
    await timeServices.insertDays(data);
    res.sendStatus(201);
}

export async function postShifts(req: Request, res: Response) {
    const data = req.body;
    await timeServices.insertShifts(data);
    res.sendStatus(201);
}

export async function showDays(req: Request, res: Response) {
    const {doctorId} = req.params;
    const id = parseInt(doctorId);
    const days = await timeServices.showDays(id);
    res.status(200).send(days);
}

export async function showShifts(req: Request, res: Response) {
    const {doctorId} = req.params;
    const id = parseInt(doctorId);
    const shifts = await timeServices.showShifts(id);
    res.status(200).send(shifts);
}