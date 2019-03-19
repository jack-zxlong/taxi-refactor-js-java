var FIXED_CHARGE = 50,
PEAK_TIME_MULTIPLIER = 1.2,
PEAK_TIME_MULTIPLIER = 1.2,
OFF_PEAK_MULTIPLIER = 1.0,
RATE_CHANGE_DISTANCE = 10,
PRE_RATE_CHANGE_NON_AC_RATE = 15,
POST_RATE_CHANGE_NON_AC_RATE = 12,
PRE_RATE_CHANGE_AC_RATE = 20,
POST_RATE_CHANGE_AC_RATE = 17,
SALES_TAX_RATE = 0.1;

class Receipt {
  constructor(taxi) {
    this.taxi = taxi;
  }
  getIsAcPreCharges(isAirConditioned) {
    return isAirConditioned ? PRE_RATE_CHANGE_AC_RATE : PRE_RATE_CHANGE_NON_AC_RATE
  }
  getIsAcPostCharges(isAirConditioned) {
    return isAirConditioned ? POST_RATE_CHANGE_AC_RATE : POST_RATE_CHANGE_NON_AC_RATE
  }
  getTotalCost() {
    let totalCost = 0;
    // fixed charges
    totalCost += FIXED_CHARGE;

    // taxi charges
    let totalKms = this.taxi.getTotalKms();
    let peakTimeMultiple = this.taxi.isPeakTime() ? PEAK_TIME_MULTIPLIER : OFF_PEAK_MULTIPLIER;
    totalCost += Math.min(RATE_CHANGE_DISTANCE, totalKms) * this.getIsAcPreCharges(this.taxi.isAirConditioned()) * peakTimeMultiple;
    totalCost += Math.max(0, totalKms - RATE_CHANGE_DISTANCE) * this.getIsAcPostCharges(this.taxi.isAirConditioned()) * peakTimeMultiple;
    return totalCost * (1 + SALES_TAX_RATE);
  }
}

export default Receipt;
