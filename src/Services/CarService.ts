// src/Services/TransferService.ts

import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    const newCars = cars.map((car) => this.createCarDomain(car));
    return newCars;
  }

  public async getCar(id: string) {
    const carODM = new CarODM();
    const car = await carODM.getCar(id);
    const newCar = this.createCarDomain(car);
    return newCar;
  }

  public async updateCar(id: string, car: ICar) {
    const carODM = new CarODM();
    const carUpdated = await carODM.updateCar(id, car);
    const newCar = this.createCarDomain(carUpdated);
    return newCar;
  }
}