var nl2arr = (nl, arr) => {
    for(let i = 0;  i < nl.length; arr.push(nl[i++]))
    return arr;
}
var boxNodes = document.querySelectorAll("input[type=text].question_input")
//convert node list to array
var boxValues = []

boxNodes.forEach( (item) => {
    boxValues.push(item.value)
})
console.log(`paste the output to the fillQuizAns.js. \n\n
var Ans = [${boxValues.map( (str) => { return (`"${str}"`) } )}] \n`)


//get all the headers 
var qHeaderNodes = document.querySelectorAll("div.header > span.name.question_name")
var results = new Array(qHeaderNodes.length).fill(0);
qHeaderNodes.forEach( (item, idx) => {
    if(item.querySelector("span") == null) {
        //if ans is wrong, get index
        results[idx] = 1;
        // 1 represents correct ans
    }
})
console.log(`also this one\n\n var results = [${results}]`)