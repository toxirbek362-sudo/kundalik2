// const cars = ['Cobalt', 'BMW', 'Damas', 'Gentra', 'Spark', 'Traverse', 'Avtobus', 10, true, false]

// console.log(cars.length)
// console.log(cars[6]);


// cars[0] = 'Nexia 3'
// console.log(cars[0]);


// console.log(cars.toString())

// console.log(typeof(cars[8]))

// console.log(cars.sort())

// console.log(cars[cars.length - 1])

const fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Pineapple']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(a of fruits) {
    console.log(a);
}

for(key of numbers) {
    if (key % 2 == 1) {
        console.log(key, ' toq son');
    } else {
        console.log(key, ' juft son');
    }
}