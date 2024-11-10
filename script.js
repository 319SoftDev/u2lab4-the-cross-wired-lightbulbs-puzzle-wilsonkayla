console.log("Script Running.");

// First set of switch nd lights 
const SwitchOne = document.querySelector('#switch1');
const Light3 = document.querySelector('#lightbulb3');
const Light8 = document.querySelector('#lightbulb8');

const toggleLights1 = () => {
  if (Light3.classList.contains('active')) {
    Light3.classList.remove('active');
    updateBackgroundColor(); 
  } else {
    Light3.classList.add('active');
    updateBackgroundColor(); 
  }
  if (Light8.classList.contains('active')) {
    Light8.classList.remove('active');
    updateBackgroundColor(); 
  } else {
    Light8.classList.add('active');
    updateBackgroundColor(); 
  }
};
SwitchOne.addEventListener('change', toggleLights1);

// second set of switch nd lights 
const SwitchTwo =  document.querySelector('#switch2');
const light1 = document.querySelector('#lightbulb1');
const light7 = document.querySelector('#lightbulb7');
const toggleLights2 = () => {
    if (light1.classList.contains('active')) {
      light1.classList.remove('active');
      updateBackgroundColor(); 
    } else {
      light1.classList.add('active');
      updateBackgroundColor(); 
    }
    if (light7.classList.contains('active')) {
      light7.classList.remove('active');
      updateBackgroundColor(); 
    } else {
      light7.classList.add('active');
      updateBackgroundColor(); 
    }
};
SwitchTwo.addEventListener('change', toggleLights2);

// third set of switches 
const SwitchThree =  document.querySelector('#switch3');
const Light4 = document.querySelector('#lightbulb4');
const Light6 = document.querySelector('#lightbulb6');
const toggleLights3 = () => {
    if (Light4.classList.contains('active')) {
      Light4.classList.remove('active');
      updateBackgroundColor(); 
    } else {
      Light4.classList.add('active');
      updateBackgroundColor(); 
    }
    if (Light6.classList.contains('active')) {
      Light6.classList.remove('active');
      updateBackgroundColor(); 
    } else {
      Light6.classList.add('active');
      updateBackgroundColor(); 
    }
    if (Light8.classList.contains('active')) {
        Light8.classList.remove('active');
        updateBackgroundColor(); 
      } else {
        Light8.classList.add('active');
        updateBackgroundColor(); 
      }
};
SwitchThree.addEventListener('change', toggleLights3);

// switch lights toggle 4
const SwitchFour =  document.querySelector('#switch4');
const Light2 = document.querySelector('#lightbulb2');
const Light9 = document.querySelector('#lightbulb9');
const toggleLights4 = () => {
    if (Light2.classList.contains('active')) {
      Light2.classList.remove('active');
      updateBackgroundColor(); 
    } else {
      Light2.classList.add('active');
      updateBackgroundColor(); 
    }
    if (Light9.classList.contains('active')) {
      Light9.classList.remove('active');
      updateBackgroundColor(); 
    } else {
      Light9.classList.add('active');
      updateBackgroundColor(); 
    }
};
SwitchFour.addEventListener('change', toggleLights4);

// Switch lights 5 
const SwitchFive = document.querySelector('#switch5');
const Light5 = document.querySelector('#lightbulb5');
const toggleLights5 = () => {
  if (Light5.classList.contains('active')) {
    Light5.classList.remove('active');
    updateBackgroundColor(); 
  } else {
    Light5.classList.add('active');
    updateBackgroundColor(); 
  }
};
SwitchFive.addEventListener('change', toggleLights5);

// switch six 
const SwitchSix = document.querySelector('#switch6');
const toggleLights6 = ()=> {
  if (light1.classList.contains('active')){
    light1.classList.remove('active');
    updateBackgroundColor(); 
  }else {
    light1.classList.add('active');
    updateBackgroundColor(); 
  }
  if (Light4.classList.contains('active')) {
    Light4.classList.remove('active');
    updateBackgroundColor(); 
  } else {
    Light4.classList.add('active');
    updateBackgroundColor(); 
  }
};
SwitchSix.addEventListener('change', toggleLights6);

// seven
const SwitchSeven = document.querySelector('#switch7');
const toggleLights7 = ()=> {
  if (Light2.classList.contains('active')){
    Light2.classList.remove('active');
    updateBackgroundColor(); 
  }else {
    Light2.classList.add('active');
    updateBackgroundColor(); 
  }
  if (Light3.classList.contains('active')) {
    Light3.classList.remove('active');
    updateBackgroundColor(); 
  } else {
    Light3.classList.add('active');
    updateBackgroundColor(); 
  }
};
SwitchSeven.addEventListener('change', toggleLights7);

// eight
const SwitchEight = document.querySelector('#switch8');
const toggleLights8 = ()=> {
  if (Light5.classList.contains('active')){
    Light5.classList.remove('active');
    updateBackgroundColor(); 
  }else {
    Light5.classList.add('active');
    updateBackgroundColor(); 
  }
  if (Light9.classList.contains('active')) {
    Light9.classList.remove('active');
    updateBackgroundColor(); 
  } else {
    Light9.classList.add('active');
    updateBackgroundColor(); 
  }
};
SwitchEight.addEventListener('change', toggleLights8);

// nine
const SwitchNine = document.querySelector('#switch9');
const toggleLights9 = ()=> {
  if (Light6.classList.contains('active')){
    Light6.classList.remove('active');
    updateBackgroundColor(); 
  }else {
    Light6.classList.add('active');
    updateBackgroundColor(); 
  }
  if (light7.classList.contains('active')) {
    light7.classList.remove('active');
    updateBackgroundColor(); 
  } else {
    light7.classList.add('active');
    updateBackgroundColor(); 
  }
};
SwitchNine.addEventListener('change', toggleLights9);
// the background 
let r = 255, g = 0, b = 255;  

const updateBackgroundColor = () => {

  const activeLights = document.querySelectorAll('.active').length;
  if (activeLights === 9) {
    r = 0;
    g = 255;
    b = 0;
  } else if (activeLights > 0) {
    r = 255 - Math.floor(28 * activeLights);
    g = 28 * activeLights;
    b = 255 - Math.floor(28 * activeLights);
  } else {
    r = 255;
    g = 0;
    b = 255;
  }
  document.getElementById('wrapper').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

// switch reatsrt 
const restartButton = document.querySelector('#restartButton');
const restartGame = () => {

  const lights = document.querySelectorAll('.lightbulb')};
