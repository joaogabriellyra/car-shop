import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor({ id, model, year, color, status, buyValue }: IVehicle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
  }
}
