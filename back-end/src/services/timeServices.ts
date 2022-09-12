import * as timeRepository from "../repositories/timeRepository.js"

export async function insertDays(DaysData: any){
    await timeRepository.insertDays(DaysData);
}

export async function insertShifts(ShiftsData: any){
    await timeRepository.insertShifts(ShiftsData);
}

export async function showDays(doctorId: number){
    const days = await timeRepository.getDaysByDoctor(doctorId);
    return days;
}

export async function showShifts(doctorId: number){
    const shifts = await timeRepository.getShiftsByDoctor(doctorId);
    return shifts;
}