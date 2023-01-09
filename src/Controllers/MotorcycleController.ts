import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMoto = await this.service.create(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const motorcycles = await this.service.getAll();
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async getMotorcycle() {
    const { id } = this.req.params;
    try {
      const moto = await this.service.getMotorcycle(id);
      if (!moto) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMotorcycle() {
    const { id } = this.req.params;
    const motoWithChanges = this.req.body;
    try {
      const moto = await this.service.updateMotorcycle(id, motoWithChanges);
      if (!moto) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }
}