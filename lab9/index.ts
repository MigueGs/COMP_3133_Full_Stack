import Student from "./IStudent";
import FullTimeStudent, { COLLEGE } from "./FullTimeStudent";
import PartTimeStudent from "./PartTimeStudent";
console.log("Hello TypeScript")
var a = 100 //Number
console.log(a)

//a = "Hello"

var b: string
b = "Helloo"
var c: number = 100
var d: boolean = false
var e: String = "Hello"

function add(a: number, b: number): number {
    // return `${a}+ ${b}`
    return a + b
}

const sum = add(10, 20)
console.log(sum)
console.log(typeof sum)

let x: string | number //Union
x = 100
x = "Hello"
// x = true // Not allowed

let y: unknown

y = true

console.log(`${y} is boolean`)

if (typeof y === 'string') {
    console.log(`${y} is string`)
} else if (typeof y === 'number') {
    console.log(`${y} is number`)
}



var s1: Student
s1 = {
    sid: 1,
    snm: "Pritesh",
    per: 50.50,
    isPass: true,
    studentType: "PartTimeStudent"
}

console.log(s1)


var s: Student = {
    sid: 1,
    snm: "Pritesh",
    per: 50.50,
    isPass: true,
    studentType: "PartTimeStudent"
}
var s2: FullTimeStudent = new FullTimeStudent()

s2.studentType = "FullTimeStudent"
s2.print()
console.log(COLLEGE)


// Type
type StringOrNumber = string | number;
var x1: StringOrNumber = 100
x1 = "Hello"

type ID = number | null
var id: ID = 100
id = null
// id = true

type Address = {
    houseNo: number
    streetName: string
    city: string
    postalCode: string
}
type GEO = {
    lat: number
    long: number
    alt: number
}

type FullAddress = Address & GEO;

var home: FullAddress = {
    houseNo: 100,
    streetName: "ABC",
    city: "XYZ",
    postalCode: "12345",
    lat: 10.10,
    long: 20.20,
    alt: 30.30
}

// Class access
var pts1 = new PartTimeStudent(1, "Teimur", 10.89, false, "PartTimeStudent");
pts1.display()
