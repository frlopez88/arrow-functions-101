const addition = (a, b) => {
    return a + b;
}

const mutiplyTimes2 = (num1) => {
    return num1 * 2
}

const addition2 = (a, b) => a + b;

const mutiplyTimes2_V2 = num1 => num1 * 2;

const functionWithCallBack = (num1, callback) => {
    return callback(num1)
}

const multiplyTimes3 = num1 => num1 * 3;

let var1 = functionWithCallBack(8, mutiplyTimes2)
let var2 = functionWithCallBack(8, multiplyTimes3)

console.log(var1)
console.log(var2)



const myDocuments = ["Everlong.mp3", "Assingment.docx", "Dance With Me.mp3", "index.js"];

// How many mp3 files do we have in the folder

const filteredData = myDocuments.filter((item) => item.includes(".mp3"));
console.log(filteredData)

// You have a list of number and you want to multiply all the number time 10

const number = [8, 9, 12];

const newNumbers = number.map(item => item * 10);

console.log(newNumbers)

// You have an array of people and we need to console.log the last name of each

const people = [
    {
        name: "Fernando",
        lastname: "Lopez",
        age: 37
    },
    {
        name: "Alessandra",
        lastname: "Ferguson",
        age: 30
    },
    {
        name: "Hanna",
        lastname: "Bryant",
        age: 32
    },
    {
        name: "Thomas",
        lastname: "Westfall",
        age: 26
    }
];

//for (let i = 0; i < people.length; i++) {
//    console.log(people[i].lastname)
//}

people.forEach( item => console.log(item.lastname) )

