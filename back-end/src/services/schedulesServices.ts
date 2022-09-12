import * as schedulesRepository from "../repositories/schedulesRepository.js"
import * as schedulesUtils from "../utils/schedulesUtils.js"
import { CreateAppointmentData } from "../repositories/schedulesRepository.js";

export async function postAppointment( appointmentData : CreateAppointmentData){
    await schedulesUtils.checkAppointmentExistance(appointmentData);
    await schedulesRepository.insertAppointment(appointmentData);
}

export async function showAppointmentsbyDay(id: number){
    const appointments = await schedulesRepository.getAppointmentsbyDay(id);
    return appointments;
}

export async function showAppointmentsbyUser(userId: number){
    const appointments = await schedulesRepository.getAppointmentsbyUser(userId);
    return appointments;
}