import * as doctorUtils from "../utils/doctorUtils.js";
import * as doctorRepository from "../repositories/doctorRepository.js"
import { CreateDoctorData } from "../repositories/doctorRepository.js";

export async function postDoctor(DoctorData : CreateDoctorData){
    const {name} = DoctorData;
    await doctorUtils.checkNameExistance(name);
    await doctorRepository.insert(DoctorData);
}

export async function showDoctors(){
    const doctors = await doctorRepository.findAll();
    return doctors;
}