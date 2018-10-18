import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

// Scope and Closures

function component1() {

  // Element variable is called in both component1() and component2() functions

  var element = document.createElement('div'); // First "local" element variable
  var element2 = document.createElement('div'); 
  // Second element variable in the same local scope. This needs to be named 'element2'

  // Lodash, now imported by this script
  element2.innerHTML = _.join(['Hello', 'webpack', '. This is the component1 function :D'], ' '); // Add text to element2

  element2.classList.add('hello');// add class to element2

  element.appendChild(element2); // append element2 into element1

  element.classList.add('background'); // add a background class to element

  // Add the image to our existing div.
  var myIcon = new Image(); // call image class
  myIcon.src = Icon; // insert "Mario" image
  element2.appendChild(myIcon); // append "Mario" Image after the text on element2

  // Push xml document to the console
  console.log(Data);

  return element;

} // Component1 Function

function component2(globalElement) {
  // Element variable is called in both component1() and component2() functions
  var element = document.createElement('div'); // Second "local" element variable

  /*
   Lodash is used along with Grave accents `` to produce HTML to be displayed.
   Grave accents `` allow the html to be formatted for easier viewing and characters 
   don't need to be escaped when using either single or double quotes
  */
   element.innerHTML = _.join([`
    <p>This is the component2 function<p>
    <p>It also uses the "element" variable<p>
    <p>This is in it's own scope<p>
    <p>You can insert a global element like this:<p>
  `+ globalElement], ' ');

  element.classList.add('scope'); // add 'scope' class

  return element;
} // Component2 Function

var globalStyle=`
background-color: #d4fffc;
color: #65008a;
border: 1px solid #4ec1e0;
width: 70%;
max-width: 320px;
text-align: center;
margin: auto;
` // inline styles for global element variable

var element = `
<div class="global-element" style="`+globalStyle+`">
This variable is called globally. It's also using inline styles.
</div>
`; // This is my 'global' element variable 

// Both functions are appended to the project's 'body' tag
document.body.appendChild(component1());
document.body.appendChild(component2(element));

