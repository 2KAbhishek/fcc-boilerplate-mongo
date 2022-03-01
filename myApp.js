require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const abhishek = new Person({name: "Abhishek", age: 24, favoriteFoods: ["chichken curry", "custard apple"]});
  abhishek.save((err, data) => {
    if (err) { return done(err); }
    done(null, data);
  });
}

const arrayOfPeople = [
  {name: "Abhishek", age: 24, favoriteFoods: ["chichken curry", "custard apple"]},
  {name: "Mary", age: 24, favoriteFoods: ["apple pie", "roasted turkey"]},
  {name: "John", age: 24, favoriteFoods: ["hot dogs", "burrito"]},
]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) { return done(err); }
    done(null, data);
  });
};

const personName = "Abhishek";

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, data) => {
    if (err) { return done(err); }
    done(null, data);
  });
};

const food = "chichken curry";

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, data) => {
    if (err) { return done(err); }
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
