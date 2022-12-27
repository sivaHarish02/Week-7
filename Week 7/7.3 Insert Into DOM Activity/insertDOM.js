function addItem() {
 // TODO: add 'item' to the list of TODOs

 //Step 1: identify the value of the myInput element. 
 var inputValue = document.getElementById("myInput").value;
//   console.log(inputValue);
 //Step 2: Create a text node containing that value
 var t = document.createTextNode(inputValue);
 
 //Step 3: Create a new li element and append the text node to it
 var li = document.createElement("li");
 if (inputValue === '') {
   alert("You must write something!");
//Step 4: Append the li element to the existing myTODOs element. 
 } else {
   document.getElementById("myTODOs").appendChild(li);
   li.appendChild(t);
 }
}
//don't change this line
if (typeof module !== 'undefined') {
 module.exports = addItem;
}
