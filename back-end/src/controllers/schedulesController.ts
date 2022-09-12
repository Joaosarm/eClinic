import { Request, Response } from "express";
import * as schedulesServices from "../services/schedulesServices.js";

export async function postAppointment(req: Request, res: Response) {
    const appointmentData = req.body;
    let { userId } = res.locals;
    userId = parseInt(userId);
    await schedulesServices.postAppointment({ userId, ...appointmentData });
    res.sendStatus(201);
}

export async function showAppointmentsbyDay(req: Request, res: Response) {
    const {doctorId} = req.params;
    const id = parseInt(doctorId);
    const appointments = await schedulesServices.showAppointmentsbyDay(id);
    res.status(200).send(appointments);
}

export async function showAppointmentsbyUser(req: Request, res: Response) {
    let { userId } = res.locals;
    userId = parseInt(userId);
    const appointments = await schedulesServices.showAppointmentsbyUser(userId);
    res.status(200).send(appointments);
}