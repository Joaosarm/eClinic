import { schedules } from "@prisma/client";
import { prisma } from "../config/database.js";

export type CreateAppointmentData = Omit<schedules, "id">;

export async function insertAppointment(appointmentData: CreateAppointmentData) {
    await prisma.schedules.create({ data: appointmentData });
}

export async function getAppointmentsbyDay( id: number) {
    const appointments = await prisma.schedules.findMany({ where: { doctorId: id} });
    return appointments;
}

export async function getAppointmentsbyUser(userId: number) {
    const appointments = await prisma.schedules.findMany({ where: { userId },
        include:{
            doctors:{
                select:{
                    name: true,
                },
            },
        }
    });
    return appointments;
}

export async function findAppointment(appointmentData: CreateAppointmentData) {
    const {day, hour, doctorId} = appointmentData;
    const appointment = await prisma.schedules.findFirst({ where: { day, hour, doctorId } });
    return appointment;
}