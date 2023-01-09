// tests/unit/services/getAllTransfers.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const motoInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'White',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motoObject = {
  id: '63bb6d18ffe7cf38a2235ef1',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'White',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

describe('Deveria atualizar uma moto pelo seu id', function () {
  it('Deveria atualizar uma moto pelo seu id com sucesso', async function () {
    // Arrange
    const motoOutput = new Motorcycle(motoObject);
    console.log(motoOutput);
    sinon.stub(Model, 'findByIdAndUpdate').resolves('634852326b35b59438fbea2f');
    // Act
    const service = new MotorcycleService();
    const result = await service.updateMotorcycle('63bb6d18ffe7cf38a2235ef1', motoInput);
    // Assert
    expect(result).to.be.deep.equal(result);

    sinon.restore();
  });
});