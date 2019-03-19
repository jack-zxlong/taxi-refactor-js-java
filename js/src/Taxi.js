class Taxi{
  constructor(airConditioned, totalKms, peakTime, isShow) {
    this.airConditioned = airConditioned;
    this.totalKms = totalKms;
    this.peakTime = peakTime;
    this.isShow = isShow
  }

  isAirConditioned() {
    return this.airConditioned;
  }

  getTotalKms() {
    return this.totalKms;
  }

  isPeakTime() {
    return this.peakTime;
  }
  isShow() {
  	return this.isShow;
  }
}

export default Taxi;
