// YOUR CODE HERE
console.log("Script Running.");

// first set of switch and  its lights 
const SwitchOne = document.querySelector('#switch1');
const Light3 = document.querySelector('#lightbulb3');
const Light8 = document.querySelector('#lightbulb8');

const toggleLights1 = () => {
  if (Light3.classList.contains('active')) {
    Light3.classList.remove('active');
    console.log("Light 3 is off");
  } else {
    Light3.classList.add('active');
    console.log("Light 3 is on");
  }
  if (Light8.classList.contains('active')) {
    Light8.classList.remove('active');
    console.log("Light 8 is off");
  } else {
    Light8.classList.add('active');
    console.log("Light 8 is on");
  }
};
SwitchOne.addEventListener('change', toggleLights1);
// second set of switch and its lights 
const SwitchTwo =  document.querySelector('#switch2');
const light1 = document.querySelector('#lightbulb1');
const light7 = document.querySelector('#lightbulb7');
const toggleLights2 = () => {
    if (light1.classList.contains('active')) {
      light1.classList.remove('active');
    } else {
      light1.classList.add('active');

    }
    if (light7.classList.contains('active')) {
      light7.classList.remove('active');
    } else {
      light7.classList.add('active');
    }
  };

SwitchTwo.addEventListener('change',toggleLights2);

// third set of switches **Bringing the 8th light here 

const SwitchThree =  document.querySelector('#switch3');
const Light4 = document.querySelector('#lightbulb4');
const Light6 = document.querySelector('#lightbulb6');
const toggleLights3 = () => {
    if (Light4.classList.contains('active')) {
      Light4.classList.remove('active');
    } else {
      Light4.classList.add('active');

    }
    if (Light6.classList.contains('active')) {
      Light6.classList.remove('active');
    } else {
      Light6.classList.add('active');
    }
    if (Light8.classList.contains('active')) {
        Light8.classList.remove('active');
      } else {
        Light8.classList.add('active');
      }
  };

SwitchThree.addEventListener('change',toggleLights3);

// switch lights toggle 4

const SwitchFour =  document.querySelector('#switch4');
const Light2 = document.querySelector('#lightbulb2');
const Light9 = document.querySelector('#lightbulb9');
const toggleLights4 = () => {
    if (Light2.classList.contains('active')) {
      Light2.classList.remove('active');
    } else {
      Light2.classList.add('active');

    }
    if (Light9.classList.contains('active')) {
      Light9.classList.remove('active');
    } else {
      Light9.classList.add('active');
    }
  };

SwitchFour.addEventListener('change',toggleLights4);
