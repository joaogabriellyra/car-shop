import { Model, Schema } from 'mongoose';

export default abstract class AbstractODM<T> {
  constructor(
    protected schema: Schema,
    protected model: Model<T>,
  ) {}
}