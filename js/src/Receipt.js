const FIXED_CHARGE = 50;
const PEAK_TIME_MULTIPLIER = 1.2;
const OFF_PEAK_MULTIPLIER = 1.0;
const RATE_CHANGE_DISTANCE = 10;
const PRE_RATE_CHANGE_NON_AC_RATE = 15;
const POST_RATE_CHANGE_NON_AC_RATE = 12;
const PRE_RATE_CHANGE_AC_RATE = 20;
const POST_RATE_CHANGE_AC_RATE = 17;
const SALES_TAX_RATE = 0.1;

const returnTotalCost = (taxiData) => {
  let totalCost = 0;
  if(taxiData.isAirConditioned) {
    totalCost += minAddMax(taxiData, PRE_RATE_CHANGE_AC_RATE, POST_RATE_CHANGE_AC_RATE);
  } else {
    totalCost += minAddMax(taxiData, PRE_RATE_CHANGE_NON_AC_RATE, POST_RATE_CHANGE_NON_AC_RATE);
  }
  return totalCost;
}

const minAddMax = (taxiData, preCharge, postCharge) => getMin(taxiData,preCharge) + getMax(taxiData, postCharge);

const getMin = (taxiData, preCharge) => Math.min(RATE_CHANGE_DISTANCE, taxiData.totalKms) * taxiData.peakTimeMultiple * preCharge;

const getMax = (taxiData, postCharge) => Math.max(0, taxiData.totalKms - RATE_CHANGE_DISTANCE) * taxiData.peakTimeMultiple * postCharge;

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
    totalCost += returnTotalCost(taxiData);
    return totalCost * (1 + SALES_TAX_RATE);
  }
}

export default Receipt;
