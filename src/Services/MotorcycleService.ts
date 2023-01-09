// src/Services/TransferService.ts

import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotoDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async create(moto: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMoto = await motorcycleODM.create(moto);
    return this.createMotoDomain(newMoto);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getAll();
    const newMotorcycles = motorcycles.map((motorcycle) => this.createMotoDomain(motorcycle));
    return newMotorcycles;
  }

  public async getMotorcycle(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.getMotorcycle(id);
    const newMotorcycle = this.createMotoDomain(motorcycle);
    return newMotorcycle;
  }

  public async updateMotorcycle(id: string, moto: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const motoUpdated = await motorcycleODM.updateMotorcycle(id, moto);
    const newMotorcycle = this.createMotoDomain(motoUpdated);
    return newMotorcycle;
  }
}