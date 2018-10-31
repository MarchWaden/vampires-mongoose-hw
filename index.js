// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire');
const vampires = require ('./vampire_app/populateVampires.js');
// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampires';


// 4. Open your mongoose connection

mongoose.connect(connectionString, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected at ', connectionString);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected ');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose error ', err);
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

//Vampire.create(vampires);

// ### Add some new vampire data

//  Vampire.create({name: 'Larry',
//  hair_color: 'brown',
//  eye_color: 'brown',
//  dob: new Date(1971, 2, 13, 7, 47),
//  loves: ['cereal','marshmallows'],
//  location: 'Minneapolis, Minnesota, US',
//  gender: 'm',
//  victims: 2,});

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
//const ladyVampires = Vampire.find({gender: "f"}});
//const murderousVampires = Vampire.find({victims: { $gte: 500 }})
//const lessMurderousVampires = Vampire.find({victims: { $lte: 150 }})
//const notThatOneDude = Vampire.find({victims: { $dne: 210234 }})
//const moderatelyMurderousVampires = Vampire.find({victims: { $gte: 150, lte: 500}})
/////////////////////////////////////////////////
// ### Select by exists or does not exist
//const nobleVampires = Vampire.find({title: {$exists: true}});
//const vegetarianVampires = Vampire.find({victims: {$exists: false}});
//const nobleVegetarianVampires = Vampire.find({title: {$exists: true}, victims: {$exists: false}})
//const redundantQuery = Vampire.find({victims: {$exists: true, $gte: 1000}});
/////////////////////////////////////////////////
// ### Select with OR
//const americanVampires = Vampire.find({location: {}})
/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
