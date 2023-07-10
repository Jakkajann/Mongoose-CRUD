const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true }).then(() => {
    console.log("Sucessfully connected");
}).catch((e) => {
    console.log("Not connected error\n" + e);
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required !"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

const orange = new Fruit({
    name: "Orange",
    score: 5,
    review: "Just an orange"
});

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineappple
// });

// orange.save();

Person.updateOne({name: "John"}, {favouriteFruit: orange}).then((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("sucessfully update");
    }
});

// Fruit.deleteOne({name: "Banana"});

// Fruit.find({}).then((result) => {
//     result.forEach((fruit) => {
//         console.log(fruit.name);
//     })
// });