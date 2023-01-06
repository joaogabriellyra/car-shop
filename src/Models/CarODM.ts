// src/Models/PaymentODM.ts

import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
  
export default class CarODM {
  private schema: Schema; 
  private model: Model<ICar>; 
  
  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
  }
  
  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }
}