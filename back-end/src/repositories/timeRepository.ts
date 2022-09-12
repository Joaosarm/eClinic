import { prisma } from "../config/database.js";

export async function insertDays(DaysData: any) {
    await prisma.days.create({ data: DaysData });
}

export async function insertShifts(ShiftData: any) {
    await prisma.shifts.create({ data: ShiftData });
}

export async function getDaysByDoctor(doctorId: number) {
    const doctor = await prisma.days.findFirst({ where: { doctorId } });
    return doctor;
}

export async function getShiftsByDoctor(doctorId: number) {
    const doctor = await prisma.shifts.findFirst({ where: { doctorId } });
    return doctor;
}