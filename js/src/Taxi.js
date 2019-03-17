class Taxi{
  constructor(airConditioned, totalKms, peakTime) {
    this.airConditioned = airConditioned;
    this.totalKms = totalKms;
    this.peakTime = peakTime;
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
}

export default Taxi;
