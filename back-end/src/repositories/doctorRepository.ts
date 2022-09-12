import { doctors } from "@prisma/client";
import { prisma } from "../config/database.js";

export type CreateDoctorData = Omit<doctors, "id">;

export async function findAll() {
    const doctors = await prisma.doctors.findMany({
        select:{
            id: true,
            name: true,
            picture: true,
            description: true,
            specializations:{
                select:{
                    name: true,
                }
            }
        }
    });
    return doctors;
}

export async function insert(DoctorData: CreateDoctorData) {
    await prisma.doctors.create({ data: DoctorData });
}

export async function findByName(name: string) {
    const doctor = await prisma.doctors.findFirst({ where: { name } });
    return doctor;
}