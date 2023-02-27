const { db, Campus, Student } = require('./server/db/index')

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
    await db.sync({force: true})

    await Promise.all(users.map(campus => {
      return Campus.create(campus);
    }));

    await Promise.all(students.map(student => {
      return Student.create(student);
    }));

    console.log('Seeding success!')
    db.close()
  }
  catch (err) {
    console.error('Oh noes! Something went wrong!')
    console.error(err)
    db.close()
  }
}

seed();