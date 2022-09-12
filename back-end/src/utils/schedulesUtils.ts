import * as schedulesRepository from "../repositories/schedulesRepository.js"
import { CreateAppointmentData } from "../repositories/schedulesRepository.js";

export async function checkAppointmentExistance(appointmentData: CreateAppointmentData) {
  const exists = await schedulesRepository.findAppointment(appointmentData);
  if (exists) {
    throw {
      type: "Invalid requisition",
      message: "Appointment already registered",
      status: 409
    }
  }
}