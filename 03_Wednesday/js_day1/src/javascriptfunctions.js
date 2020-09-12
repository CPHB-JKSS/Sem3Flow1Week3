/* 
 * JavaScript Functions
 */

console.log('\n\nJavaScript functions and Callbacks')

//1
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2
}

var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

//2
console.log('\n2)')
console.log(add(1, 2)) //This will print "3"
console.log(add) //This will print the defined function 'add' and referes to the function 'add'.
console.log(add(1, 2, 3)) //This will print "3"
console.log(add(1)) //This will print "NaN" - An argument is missing
console.log(cb(3, 3, add)) //This will print "Result from the two numbers: 3+3=6"
console.log(cb(4, 3, sub)) //This will print "Result from the two numbers: 4-3=1"
//console.log(cb(3,3,add())) //This will print an error "Callback is not a function"
console.log(cb(3, "hh", add)) //This will print "Result from the two numbers: 3+hh=3hh"

//3
console.log('\n3)')
var cb = function (n1, n2, callback) {
    try {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    } catch (e) {
        console.error(e.name + ': ' + e.message)
    }
};
console.log(cb(3, 3, add()))

//4
console.log('\n4)')
function mul(n1, n2) {
    return n1 * n2
}
console.log(cb(3, 3, mul))

//5
console.log('\n5)')
function div(n1, n2) {
    return n1 / n2
}
console.log(cb(3, 3, div))


console.log('\n\nCallbacks (with map, filter and forEach)')

//1
console.log('\n1)')
var names = ["Lars", "Jan", "Bo", "Frederik"]
var filtered = names.filter(word => word.length <= 3)
console.log("\'names\'-array")
names.forEach(name => console.log(name))
console.log("\n\'filtered\'-array: ")
filtered.forEach(name => console.log(name))

//2
console.log('\n2)')
namesUpperCase = names.map(name => name.toUpperCase())
console.log(namesUpperCase)

//3
console.log('\n3)')
namesHTML = names.map(name => "<li>" + name + "</li>")
console.log("<ul>" + namesHTML.join('') + "</ul>")

//4
console.log('\n4)')
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
]

console.log("Cars newer than 1999:")
console.log(cars.filter(car => car.year > 1999))
console.log("All  Volvo’s:")
console.log(cars.filter(car => car.make === "Volvo"))
console.log("All cars with a price below 5000:")
console.log(cars.filter(car => car.price < 5000))

//4a
console.log('\n4a)')
function insertSQL(cars) {
    var insertString = "INSERT INTO cars (id,year,make,model,price) VALUES "
    return valuesString = cars.map(function (car) {
        var valuesArray = [car.id, car.year, "\'" + car.make + "\'", "\'" + car.model + "\'", car.price]
        return insertString + "(" + valuesArray.join(',') + ");"
    })
}
console.log(insertSQL(cars))


console.log('\n\nAsynchronous Callbacks')

//1
console.log('\n1)')
var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log(
"console.log(\"aaaaaaaaaa\"); \tThis is executed first"
+ "\nmsgPrinter(\"bbbbbbbbbb\", 2000); This is executed last because of delay"
+ "\nconsole.log(\"dddddddddd\"); \tThis is executed second"
+ "\nmsgPrinter(\"eeeeeeeeee\", 1000); This is executed fourth because of delay"
+ "\nconsole.log(\"ffffffffff\"); \tThis is executed third")


console.log('\n2)')
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");