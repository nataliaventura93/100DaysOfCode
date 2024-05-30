const getSleepHours = (day) => {
    let hours;
    switch (day) {
      case "monday":
        hours = 8;
        break;
      case "tuesday":
        hours = 7;
        break;
      case "wednesday":
        hours = 8;
        break;
      case "thursday":
        hours = 6;
        break;
      case "friday":
        hours = 7;
        break;
      case "saturday":
        hours = 9;
        break;
      case "sunday":
        hours = 9;
        break;
    }
    return hours;
  };
  
  //console.log(getSleepHours("saturday"));
  
  const getActualSleepHours = () => {
    let totalHours = 0;
    totalHours += 8; //getSleepHours("monday")
    totalHours += 7; //getSleepHours("tuesday")
    totalHours += 8; //getSleepHours("wednesday")
    totalHours += 6; //getSleepHours("thrusday")
    totalHours += 7; //getSleepHours("friday")
    totalHours += 9; //getSleepHours("saturday")
    totalHours += 9; //getSleepHours("sunday")
  
    return totalHours;
  };
  
  //console.log(getActualSleepHours());
  
  const getIdealSleepHours = (hours) => {
    let idealHours = hours;
    return idealHours * 7;
  };
  
  //console.log(getIdealSleepHours(8));
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep");
    }
    if (actualSleepHours > idealSleepHours) {
      const overHours = actualSleepHours - idealSleepHours;
      console.log(`You got ${overHours} more hours sleep than needed`);
    }
    if (actualSleepHours < idealSleepHours) {
      const underHours = idealSleepHours - actualSleepHours;
      console.log(
        `You got ${underHours} less hours sleep than needed. You should get some rest`
      );
    }
  };
  
  calculateSleepDebt();