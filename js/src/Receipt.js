const FIXED_CHARGE = 50; // 固定电荷
const PEAK_TIME_MULTIPLIER = 1.2; // 峰值时间乘数
const OFF_PEAK_MULTIPLIER = 1.0; // 非峰值时间乘数
const RATE_CHANGE_DISTANCE = 10; // 发生收费梯度变化的值
const PRE_RATE_CHANGE_NON_AC_RATE = 15; // 没有空调RATE_CHANGE_DISTANCE值之前的每公里收费
const POST_RATE_CHANGE_NON_AC_RATE = 12; // 没有空调RATE_CHANGE_DISTANCE值之后的每公里收费
const PRE_RATE_CHANGE_AC_RATE = 20; // 有空调RATE_CHANGE_DISTANCE值之前的每公里收费
const POST_RATE_CHANGE_AC_RATE = 17; // 有空调RATE_CHANGE_DISTANCE值之后的每公里收费
const SALES_TAX_RATE = 0.1; // 销售税税率

class Receipt {
  constructor(taxi) {
    this.taxi = taxi;
  }

  getTotalCost() {
    let totalCost = 0;
    // fixed charges
    totalCost += FIXED_CHARGE;

    // taxi charges
    let totalKms = this.totalKms;
    // 是不是乘车高峰期
    let peakTimeMultiple = this.peakTime ? PEAK_TIME_MULTIPLIER : OFF_PEAK_MULTIPLIER;
    let isAirConditioned = this.airConditioned ? PRE_RATE_CHANGE_AC_RATE : PRE_RATE_CHANGE_NON_AC_RATE
    let isPostAirConditioned = this.airConditioned ? POST_RATE_CHANGE_AC_RATE : POST_RATE_CHANGE_NON_AC_RATE
    totalCost += Math.min(RATE_CHANGE_DISTANCE, totalKms) * isAirConditioned * peakTimeMultiple;
    totalCost += Math.max(0, totalKms - RATE_CHANGE_DISTANCE) * isPostAirConditioned * peakTimeMultiple;

    return totalCost * (1 + SALES_TAX_RATE);
  }
}

export default Receipt;
