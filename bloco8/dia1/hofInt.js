const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const goToBed = () => 'Partiu dormir!!';

const doingThings = (action) => {
  console.log(action());
}

doingThings(wakeUp);
doingThings(breakfast);
doingThings(goToBed);