"use strict";

let carProperties = {
  provider: "opel",
  model: 121,
  year: 2020,
  averageSpeed: 10,
};

function showCarInfo() {
  console.log(carProperties);
}
showCarInfo();

let distance;
let timeHour;
let timeMin;
function calculTimeCoverDistance(averageSpeed, distance) {
  if (distance > 0) {
    timeHour = Math.floor(distance / averageSpeed);
    timeMin = (((distance % averageSpeed) / averageSpeed) * 60).toFixed(0);
    if ((distance / averageSpeed) % 4 === 0) {
      timeHour += Math.floor(timeHour / 4);
      --timeHour;
    } else {
      timeHour += Math.floor(timeHour / 4);
    }
    if (timeMin < 10) {
      timeMin = "0" + String(timeMin);
    }
    if (timeHour < 10) {
      timeHour = "0" + String(timeHour);
    }
    console.log(`${timeHour}:${timeMin}`);
  }
}
calculTimeCoverDistance(carProperties.averageSpeed, 201);
console.log("_____________________________");

let fraction_1 = {
  numerator: 3,
  denominator: 4,
};
let fraction_2 = {
  numerator: 2,
  denominator: 8,
};

function addingFractions(
  numeratorFirst,
  denominatorFirst,
  numeratorSecond,
  denominatorSecond
) {
  let resultNumerator;
  let resultDenominator;
  if (denominatorFirst === denominatorSecond) {
    resultNumerator = numeratorFirst + numeratorSecond;
    resultDenominator = denominatorFirst;
  } else {
    resultNumerator =
      numeratorFirst * denominatorSecond + numeratorSecond * denominatorFirst;
    resultDenominator = denominatorFirst * denominatorSecond;
  }
  return fractionReduction(resultNumerator, resultDenominator);
}
addingFractions(
  fraction_1.numerator,
  fraction_1.denominator,
  fraction_2.numerator,
  fraction_2.denominator
);

function differenceFractions(
  numeratorFirst,
  denominatorFirst,
  numeratorSecond,
  denominatorSecond
) {
  let resultNumerator;
  let resultDenominator;
  if (denominatorFirst === denominatorSecond) {
    resultNumerator = numeratorFirst - numeratorSecond;
    resultDenominator = denominatorFirst;
  } else {
    resultNumerator =
      numeratorFirst * denominatorSecond - numeratorSecond * denominatorFirst;
    resultDenominator = denominatorFirst * denominatorSecond;
  }
  return fractionReduction(resultNumerator, resultDenominator);
}
differenceFractions(
  fraction_1.numerator,
  fraction_1.denominator,
  fraction_2.numerator,
  fraction_2.denominator
);

function multiplicationFractions(
  numeratorFirst,
  denominatorFirst,
  numeratorSecond,
  denominatorSecond
) {
  let resultNumerator;
  let resultDenominator;
  resultNumerator = numeratorFirst * numeratorSecond;
  resultDenominator = denominatorFirst * denominatorSecond;
  return fractionReduction(resultNumerator, resultDenominator);
}
multiplicationFractions(
  fraction_1.numerator,
  fraction_1.denominator,
  fraction_2.numerator,
  fraction_2.denominator
);

function divisionFractions(
  numeratorFirst,
  denominatorFirst,
  numeratorSecond,
  denominatorSecond
) {
  let resultNumerator;
  let resultDenominator;
  resultNumerator = numeratorFirst * denominatorSecond;
  resultDenominator = denominatorFirst * numeratorSecond;
  return fractionReduction(resultNumerator, resultDenominator);
}
divisionFractions(
  fraction_1.numerator,
  fraction_1.denominator,
  fraction_2.numerator,
  fraction_2.denominator
);

function findingCommonDenominator(resultNumerator, resultDenominator) {
  let x = resultNumerator;
  let y = resultDenominator;
  if (resultNumerator === 0 || resultDenominator === 0) {
    console.log(0);
  } else {
    if (resultNumerator < resultDenominator) {
      if (resultDenominator % resultNumerator === 0) {
        console.log(resultDenominator / resultNumerator);
        return resultNumerator;
      } else {
        for (resultDenominator; resultDenominator > 0; resultDenominator--) {
          if (resultNumerator == resultDenominator) continue;
          if (x % resultDenominator === 0 && y % resultDenominator === 0) break;
        }
        console.log(resultDenominator);
        return resultDenominator;
      }
    } else {
      if (resultNumerator % resultDenominator === 0) {
        console.log(resultNumerator / resultDenominator);
        return resultDenominator;
      } else {
        for (resultNumerator; resultNumerator > 0; resultNumerator--) {
          if (resultNumerator == resultDenominator) continue;
          if (y % resultNumerator === 0 && x % resultNumerator === 0) break;
        }
        console.log(resultNumerator);
        return resultNumerator;
      }
    }
  }
}
// findingCommonDenominator(9, 45);
// findingCommonDenominator(45, 5);
// findingCommonDenominator(32, 8);
// findingCommonDenominator(45, 9);
// findingCommonDenominator(4, 0);
// findingCommonDenominator(5, 24);

function fractionReduction(numerator, denominator) {
  let reduction;
  if (numerator % denominator === 0) {
    numerator = numerator / denominator;
    denominator === 1;
    return console.log(numerator);
  } else {
    reduction = findingCommonDenominator(numerator, denominator);
    numerator = numerator / reduction;
    denominator = denominator / reduction;
    if (denominator === 1) {
      return console.log(numerator);
    }
    if (numerator === 0 || denominator === 0) {
      return console.log(0);
    } else {
      console.log(` ${numerator}/${denominator} `);
    }
  }
}

// fractionReduction(45, 9);
// fractionReduction(9, 45);
// fractionReduction(2, 0);
// fractionReduction(42, 21);
// fractionReduction(-4, 8);
// fractionReduction(4, 5);
console.log("_____________________________");

let time = {
  hours: 12,
  minutes: 30,
  seconds: 30,
};

function showTime() {
  console.log(time);
  console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
}
showTime();

function convertingSeconds(s) {
  let hours;
  let minutes;
  let seconds;
  if (s < 0) {
    return console.log("Only positive values for seconds");
  }
  hours = Math.floor(s / 3600);
  if (hours == 0 || hours < 10) {
    hours = "0" + String(hours);
  }
  minutes = Math.floor((s % 3600) / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }
  seconds = (s % 3600) % 60;
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }
  return console.log(`${hours}:${minutes}:${seconds}`);
}

function secondChangeTime(changeSecond) {
  let hours = time.hours;
  let minutes = time.minutes;
  let seconds = time.seconds;
  let timeResult;
  timeResult = hours * 3600 + minutes * 60 + seconds + changeSecond;
  convertingSeconds(timeResult);
}
// secondChangeTime(120)
// secondChangeTime(0)
// secondChangeTime(-120)

function minuteChangeTime(changeMinute) {
  let hours = time.hours;
  let minutes = time.minutes;
  let seconds = time.seconds;
  let timeResult;
  timeResult = hours * 3600 + (minutes + changeMinute) * 60 + seconds;
  convertingSeconds(timeResult);
}
// minuteChangeTime(60)
// minuteChangeTime(0)
// minuteChangeTime(-120)

function hourChangeTime(changeHour) {
  let hours = time.hours;
  let minutes = time.minutes;
  let seconds = time.seconds;
  let timeResult;
  timeResult = (hours + changeHour) * 3600 + minutes * 60 + seconds;
  convertingSeconds(timeResult);
}
hourChangeTime(2);
