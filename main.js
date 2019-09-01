// Get the HTML Elements that we may need in addition to customizing some of them {body, container, Creating Button & Append it}

var myBody = document.querySelector('.body');
var myContainer = document.querySelector('.container');
var myButton =document.createElement('button');
myButton.textContent = 'Click me to Reset the  Grid';
myContainer.insertAdjacentElement('beforebegin', myButton);
myBody.style.backgroundColor = "rgb(240, 228, 228)";
myBody.style.margin = '0';
myBody.style.padding = '0';

// Our Main Function which Create Divs, Customizing them and Coloring them

function createDivs(num = 16) {
  for (let i=1; i<= Math.pow(num, 2); i++) { // Creating Divs
    var div = document.createElement('div');
    div.classList.add('item');
    myContainer.appendChild(div);
};

// Customizing Divs
var cellsNumber = (window.innerHeight -25) / num;
var gridTemplate = `repeat(${num}, ${cellsNumber}px) / repeat(${num}, ${cellsNumber}px)`;
myContainer.style.backgroundColor = "#eee";
myContainer.style.display = "grid";
myContainer.style.gridTemplate = gridTemplate;
myContainer.style.justifyContent = 'center';
myContainer.style.width = `${cellsNumber*num}px`;
myContainer.style.border = '2px solid #000';
myContainer.style.marginLeft = 'auto';
myContainer.style.marginRight = 'auto';

// Coloring Divs
var squareDivs = document.querySelectorAll('div');
  for (let j = 1; j <= Math.pow(num, 2); j++) {
    squareDivs[j].addEventListener('mouseover', () => squareDivs[j].style.backgroundColor = getRandomRgb());
    // squareDivs[j].addEventListener('mouseleave', () => squareDivs[j].style.backgroundColor = '#eee'); /* Activate this Event if you want reassign the Div's color to it's original case "No Color" */
  }  
  
};
createDivs(); // Calling the Creation Coloring Function 

// Random Color Function
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
        r = num >> 16;
        g = num >> 8 & 255;
        b = num & 255;
    return `rgb(${r},${g},${b})`;
  };

// Prompt Message & Removing Existing Divs Function 

function divsNumber(num) {
  var myDivs = document.querySelectorAll('div');
  for (let k=1; k<= myDivs.length-1; k++) {
    myContainer.removeChild(myDivs[k]);
    
  }
  var promptMessage = prompt('Please Insert the divs number', 16);
  createDivs(promptMessage);
};

myButton.addEventListener('click', divsNumber);




