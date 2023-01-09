import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
    
export default class MotorcycleODM {
  private schema: Schema; 
  private model: Model<IMotorcycle>; 
    
  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycle || model('Motorcycle', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
  }
    
  public async create(moto: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...moto });
  }
  
  public async getAll():Promise<IMotorcycle[]> {
    return this.model.find();
  }
  
  public async getMotorcycle(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    return this.model.findById(id);
  }
  public async updateMotorcycle(id: string, moto: IMotorcycle) {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    return this.model.findByIdAndUpdate({
      _id: id,
    }, {
      ...moto,
    } as UpdateQuery<IMotorcycle>, {
      new: true,
    });
  }
}