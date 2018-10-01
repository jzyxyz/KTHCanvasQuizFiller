var boxNodes = document.querySelectorAll("input[type=text].question_input")
//convert node list to array

var boxArray = []; 
for(var i = 0;  i < boxNodes.length; boxArray.push(boxNodes[i++]));
var boxValues = []
boxArray.forEach( (item) => {
    boxValues.push(item.value)
    console.log(item.value)
})
console.log("paste the output to the fillQuizAns.js", $(boxValues))
