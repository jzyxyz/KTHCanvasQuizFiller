var getLastInput = () => {
    //convert node list to array
    let boxValues = []

    boxNodes.forEach((item) => {
        boxValues.push(item.value)
    })
    console.log(`paste the output to the fillQuizAns.js. \n\n
    var lastInput = [${boxValues.map((str) => { return (`"${str}"`) })}] \n`)
}



//get all the headers
var getResult = () => {
    let qHeaderNodes = document.querySelectorAll("div.header > span.name.question_name")
    let results = new Array(qHeaderNodes.length).fill(0);
    qHeaderNodes.forEach((item, idx) => {
        if (item.querySelector("span") == null) {
            //if ans is wrong, get index
            results[idx] = 1;
            // 1 represents correct ans
        }
    })
    console.log(`also this one\n\n var results = [${results}]`)
}


//support for radio nodes
var getRadioInput = () => {
    let radioIdx = new Array(radioNodes.length).fill(0);
    radioNodes.forEach((item, idx) => {
        if (item.checked) {
            radioIdx[idx] = 1;
        }
    })
    console.log(`paste this one \n\n var radioIdx = [${radioIdx}]`)
}
//support or drag-down

var getDragAns = () => {
    let dragValues = []

    dragNodes.forEach((item) => {
        dragValues.push(item.innerHTML)
    })
    console.log(`paste the output to the fillQuizAns.js. \n\n
    var dragAns = [${dragValues.map((str) => { return (`"${str}"`) })}] \n`)
}




var radioNodes = document.querySelectorAll("input[type=radio].question_input")
if(radioNodes.length){
    getRadioInput();
}
var boxNodes = document.querySelectorAll("input[type=text].question_input")
if(boxNodes.length){
    getLastInput();
}
var dragNodes = document.querySelectorAll("div.answer_match_right > select > option")
if(dragNodes.length){
    getDragAns();
}
getResult();