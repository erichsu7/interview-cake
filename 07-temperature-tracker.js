function TempTracker () {
  this.max;
  this.min;
  this.count = 0;
  this.tempSum = 0;
  this.tempCounts = {};
  this.maxTempCount = 0;
  this.mode;
};

TempTracker.prototype.insert = function (temp) {
  // Adjust min and max
  this.max = Math.max(temp, this.max) || temp;
  this.min = Math.min(temp, this.min) || temp;
  // Adjust mean variables
  this.tempSum += temp;
  this.count++;
  // Adjust mode variables
  this.tempCounts[temp] = this.tempCounts[temp] + 1 || 1;
  if (this.tempCounts[temp] > this.maxTempCount) {
    this.maxTempCount = this.tempCounts[temp];
    this.mode = temp;
  }

  return temp;
};

TempTracker.prototype.getMax = function () {
  return this.max;
};

TempTracker.prototype.getMin = function () {
  return this.min;
};

TempTracker.prototype.getMean = function () {
  return this.tempSum / this.count;
};

TempTracker.prototype.getMode = function () {
  return this.mode;
};

var temps = [];
var tempTracker = new TempTracker();
for (var i = 0; i < 10; i++) {
  var randomTemp = Math.floor(Math.random() * 10);
  temps.push(randomTemp);
  tempTracker.insert(randomTemp);
};

console.log(temps);
console.log({
  "max": tempTracker.getMax(),
  "min": tempTracker.getMin(),
  "mean": tempTracker.getMean(),
  "mode": tempTracker.getMode(),
});
