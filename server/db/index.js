// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Character = require('./models/character');
const Car = require('./models/car');

// establish relations using magic methods


const seedData = async()=> {
    await Promise.all([
      Character.create({ name: 'Allen', animal: 'dog'}),
      Character.create({ name: 'Yimin', animal: 'cat'})
    ]);
    // const [pets, learning, chores] = character;
  
    await Promise.all([
      Car.create({ year: '1999', make: 'Toyota', model: '4Runner'}),
    ]);
  };

module.exports = {
    // Include your models in this exports object as well!
    Character,
    db,
    Car,
    seedData
}