// tests/unit/services/getAllTransfers.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

const inputArray = [
  {
    id: '63b8adc0742c31487ab937bf',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63b8adfa742c31487ab937c1',
    model: 'Fiat',
    year: 2008,
    color: 'White',
    status: true,
    buyValue: 20,
    doorsQty: 4,
    seatsQty: 5,
  },
];

describe('Deveria buscar todos os carros', function () {
  it('Deveria buscar todos os carros com sucesso', async function () {
    // Arrange
    const carOutput = inputArray.map((item) => new Car(item));
    
    sinon.stub(Model, 'findOne').resolves(carOutput[0]);
    // Act
    const service = new CarService();
    const result = await service.getCar('63b8adc0742c31487ab937bf');
    console.log(result);
    // Assert
    expect(result).to.be.deep.equal(carOutput[0]);

    sinon.restore();
  });
});