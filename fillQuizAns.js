/*Ans = ["kxc console rta", "sudo ifconfig eth1 172.16.1.2 netmask 255.255.255.255", 
"sudo ip addr add 172.16.1.2/24 dev eth1", "sudo route add default gw 172.16.1.1", 
"sudo ip route add default via 172.16.1.1", "sudo vtysh", "configure terminal", 
"interface eth1", "ip address 172.16.251.1/24", "ip forwarding", "router ospf", "router­id 172.16.251.1", 
"network 172.16.251.0/24 area 0", "network 172.16.1.0/24 area 0", "route bgp 65000", "bgp router-id 192.168.10.2", 
"neighbor 192.168.10.1 remote-as 65001", "network 172.16.251.0/24"]*/
//Paste the answer you got from getQuizAns.js into the array
Ans = ["lxc console rta", "sudo ifconfig eth1 172.16.1.2 netmask 255.255.255.255", "sudo ip addr add 172.16.1.2/24 dev eth1", "sudo route add default gw 172.16.1.1", "sudo ip route add default via 172.16.1.1", "sudo vtysh", "configure terminal", "interface eth1", "ip address 172.16.251.1/24", "ip forwarding", "router ospf", "router­id 172.16.251.1", "network 172.16.251.0/24 area 0", "network 172.16.1.0/24 area 0", "route bgp 65000", "bgp router-id 192.168.10.2", "neighbor 192.168.10.1 remote-as 65001", "network 172.16.251.0/24"]
var boxNodes = document.querySelectorAll("input[type=text].question_input")
var boxArray = []; // Will hold the array of Node's
for(var i = 0;  i < boxNodes.length; boxArray.push(boxNodes[i++]));
boxArray.forEach( (item, idx) => {
    item.value = Ans[idx];
})