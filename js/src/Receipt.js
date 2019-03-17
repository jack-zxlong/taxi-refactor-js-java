const FIXED_CHARGE = 50;
const PEAK_TIME_MULTIPLIER = 1.2;
const OFF_PEAK_MULTIPLIER = 1.0;
const RATE_CHANGE_DISTANCE = 10;
const PRE_RATE_CHANGE_NON_AC_RATE = 15;
const POST_RATE_CHANGE_NON_AC_RATE = 12;
const PRE_RATE_CHANGE_AC_RATE = 20;
const POST_RATE_CHANGE_AC_RATE = 17;
const SALES_TAX_RATE = 0.1;

function sumCost (taxiData) {
  let totalCost = 0;
  if(taxiData.isAirConditioned) {
    totalCost += getMin(taxiData) * PRE_RATE_CHANGE_AC_RATE;
    totalCost += getMax(taxiData) * POST_RATE_CHANGE_AC_RATE;
  } else {
    totalCost += getMin(taxiData)  * PRE_RATE_CHANGE_NON_AC_RATE;
    totalCost += getMax(taxiData) * POST_RATE_CHANGE_NON_AC_RATE;
  }
  return totalCost;
}
function getMin(taxiData) {
  return Math.min(RATE_CHANGE_DISTANCE, taxiData.totalKms) * taxiData.peakTimeMultiple;
}
function getMax(taxiData) {
  return Math.max(0, taxiData.totalKms - RATE_CHANGE_DISTANCE) * taxiData.peakTimeMultiple;
}

class Receipt {
  constructor(taxi) {
    this.taxi = taxi;
  }

  getTotalCost() {
    let totalCost = 0;
    // fixed charges
    totalCost += FIXED_CHARGE;

    // taxi charges
    let taxiData = {
      totalKms: this.taxi.totalKms,
      peakTimeMultiple: this.taxi.peakTime ? PEAK_TIME_MULTIPLIER : OFF_PEAK_MULTIPLIER,
      isAirConditioned: this.taxi.airConditioned
    };
    totalCost += sumCost(taxiData);
    return totalCost * (1 + SALES_TAX_RATE);
  }
}

export default Receipt;
