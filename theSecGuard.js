let ports = [22, 80, 443, 3000, 8080]
// filter the ports greater than 1024

let filterPorts = ports.filter(item => item >= 1024);
console.log(filterPorts)