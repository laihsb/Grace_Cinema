const { db, User, Movie, Personnel } = require('./server/db/index')

const users = [
	{
		email: ,
		password: ,
		fName: ,
		lName: ,
		type: 
	},
];

const movies = [

	{
		title: ,
		genre: ,
		year: ,
		description: ,
		imageUrl: ,
		price: ,
		inventory:
	},
];

const personnel = [
	{
		fName: 'Christopher',
		lName: 'Lee',
		type: ,
		details: ,
		imageUrl: 
	}, 
	{
		fName: ,
		lName: ,
		type: ,
		details: ,
		imageUrl: 
	}, {
		fName: ,
		lName: ,
		type: ,
		details: ,
		imageUrl: 
	}, 
];

const seed = async () => {
  try {
    await db.sync({force: true});

    await Promise.all(users.map(user => {
      return User.create(user);
    }));
    await Promise.all(movies.map(movie => {
      return Movie.create(movie);
    }));
    await Promise.all(personnel.map(person => {
      return Personnel.create(person);
    }));

    console.log('Seeding success!')
    db.close()
  }
  catch (err) {
    console.error('You might need a bigger boat -- something went wrong!')
    console.error(err)
    db.close()
  }
}

seed();