import Receipt from '../src/Receipt'
import Taxi from '../src/Taxi'
import {expect} from 'chai'

describe('CashRegister', () => {
  it('shouldCalculateChargesForACTaxiFor20Kms', () => {
    const cost = new Receipt(new Taxi(true, 30, false)).getTotalCost();
    expect(cost).to.be.closeTo(649, 0.01);
  });

  it('shouldCalculateChargesForNonACTaxiFor20Kms', () => {
    const cost = new Receipt(new Taxi(false, 30, false)).getTotalCost();
    expect(cost).to.be.closeTo(484, 0.01);
  });

  it('shouldCalculateForACChargesFor20KmsPeakTime', () => {
    const cost = new Receipt(new Taxi(true, 30, true)).getTotalCost();
    expect(cost).to.be.closeTo(767.8, 0.01);
  });

  it('shouldCalculateChargesForNonACTaxiFor20KmsPeakTime', () => {
    const cost = new Receipt(new Taxi(false, 30, true)).getTotalCost();
    expect(cost).to.be.closeTo(569.8, 0.01);
  });
})
