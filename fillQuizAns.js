
//Paste the output from getQuizAns.js here.
var lastInput = ["lxc console rta", "sudo ifconfig eth1 172.16.1.2 netmask 255.255.255.0",
    "sudo ip addr add 172.16.1.2/24 dev eth1", "sudo route add default gw 172.16.1.1",
    "sudo ip route add default via 172.16.1.1", "sudo vtysh", "configure terminal", "interface eth1",
    "ip address 172.16.251.1/24", "ip forwarding", "router ospf", "router­-id 172.16.251.1",
    "network 172.16.251.0/24 area 0", "network 172.16.1.0/24 area 0", "route bgp 65000",
    "bgp router-id 192.168.10.2", "neighbor 192.168.10.1 remote-as 65001", "network 172.16.251.0/24"]
var results = [1, 1, 1, 1, 1, 1, 1, 0, 0, 1]
var radioIdx = [1,0,0,0,0]
var dragValues = ["Show operating configuration","Show interface status and configuration",
"Show IP routing table","Show the link-state database summary",
"Show OSPF interface information","Show OSPF neighbour information",
"Show a summary of BGP neighbor status","Show BGP routes"] 
//*****************************************


//Auto fill ans
var boxNodes = document.querySelectorAll("input[type=text].question_input")
var fillText = () => {
    boxNodes.forEach((item, idx) => {
        item.value = lastInput[idx];
    })
}
var radioNodes = document.querySelectorAll("input[type=radio].question_input")
var fillRadio = () => {
    radioNodes.forEach((item, idx) => {
        item.checked = radioIdx[idx] 
    })
}
var dragNodes = document.querySelectorAll("select")
var fillDrag = () => {
    dragNodes.forEach( (select, idx) => {
        optArr = Array.apply(null, select.options)
        optArr.forEach(
            option => {
                if(option.innerHTML == dragValues[idx]){
                    option.selected=true
                }
            }
        )
    })
}
//Highlight false ans
var qHeaderNodes = document.querySelectorAll("div.header")
var highlight = () => {
    qHeaderNodes.forEach((item, idx)=> {
        if(results[idx]===0){
            item.style.backgroundColor = "salmon"  
        }
    })
}


//main
highlight();
if(lastInput.length>0){
    fillText();
} 
if(radioIdx.length>0){
    fillRadio();
}
if(dragValues.length>0){
    fillDrag();
}