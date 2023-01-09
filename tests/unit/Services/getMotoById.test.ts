// tests/unit/services/getAllTransfers.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

const inputArray = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

describe('Deveria buscar uma moto pelo seu id', function () {
  it('Deveria buscar uma moto pelo seu id com sucesso', async function () {
    // Arrange
    const motoOutput = inputArray.map((item) => new Motorcycle(item));
    
    sinon.stub(Model, 'findOne').resolves(motoOutput[0]);
    // Act
    const service = new MotorcycleService();
    const result = await service.getMotorcycle('634852326b35b59438fbea2f');
    // Assert
    expect(result).to.be.deep.equal(motoOutput[0]);

    sinon.restore();
  });
});