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
    fName: 'Elijah',
    lName: 'Wood',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Ian',
    lName: 'McKellen',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Liv',
    lName: 'Tyler',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Viggo',
    lName: 'Mortensen',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Sean',
    lName: 'Astin',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'John',
    lName: 'Rhys-Davies',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Christopher',
    lName: 'Lee',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Billy',
    lName: 'Boyd',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  }, {
    fName: 'Dominic',
    lName: 'Monaghan',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Orlando',
    lName: 'Bloom',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Hugo',
    lName: 'Weaving',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Sean',
    lName: 'Bean',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Andy',
    lName: 'Serkis',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Karl',
    lName: 'Urban',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'Cate',
    lName: 'Blanchett',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  }
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
