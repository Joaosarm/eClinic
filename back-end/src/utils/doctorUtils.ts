import * as doctorRepository from "../repositories/doctorRepository.js"

export async function checkNameExistance(name: string) {
  const exists = await doctorRepository.findByName(name)
  if (exists) {
    throw {
      type: "Invalid requisition",
      message: "Doctor already registered",
      status: 409
    }
  }
}