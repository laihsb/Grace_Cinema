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
		title: 'The Hobbit',
		genre: 'Fantasy',
		year: '1977',
		description: "A homebody hobbit in Middle Earth gets talked into joining a quest with a group of dwarves to recover their treasure from a dragon.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'The Lord of the Rings',
		genre: 'Fantasy',
		year: '1978',
		description: "The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron's reign over Middle-earth.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'The Return of the King',
		genre: 'Fantasy',
		year: '1980',
		description: "Two Hobbits struggle to destroy the Ring in Mount Doom while their friends desperately fight evil Lord Sauron's forces in a final battle.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		genre: 'Fantasy',
		year: '2001',
		description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'The Lord of the Rings: The Two Towers',
		genre: 'Fantasy',
		year: '2002',
		description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'The Lord of the Rings: The Return of the King',
		genre: 'Fantasy',
		year: '2003',
		description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'The Hobbit: An Unexpected Journey',
		genre: 'Fantasy',
		year: '2012',
		description: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'The Hobbit: The Desolation of Smaug',
		genre: 'Fantasy',
		year: '2013',
		description: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'The Hobbit: The Battle of the Five Armies',
		genre: 'Fantasy',
		year: '2014',
		description: "Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'The Lord of the Rings: The Rings of Power (Season 1)',
		genre: 'Fantasy',
		year: '2022',
		description: "Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'VeggieTales: Lord of the Beans',
		genre: 'Fantasy',
		year: '2005',
		description: "A lesson in using your gifts told in a manner of JRR Tolkien's classic 'The Lord of the Rings.'",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'Mowgli: Legend of the Jungle',
		genre: 'Adventure',
		year: '2018',
		description: "A human child raised by wolves must face off against a menacing tiger named Shere Khan, as well as his own origins.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'Thor: Ragnarok',
		genre: 'Action',
		year: '2017',
		description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'Star Wars: Episode I - The Phantom Menace',
		genre: 'Scifi',
		year: '2019',
		description: "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'Star Wars: Episode II - Attack of the Clones',
		genre: 'Scifi',
		year: '2019',
		description: "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'Star Wars: Episode III - Revenge of the Sith',
		genre: 'Scifi',
		year: '2019',
		description: "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'Star Wars: Episode IV - A New Hope',
		genre: 'Scifi',
		year: '2019',
		description: "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'Star Wars: Episode V - The Empire Strikes Back',
		genre: 'Scifi',
		year: '2019',
		description: "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'Star Wars: Episode VI - The Return of the Jedi',
		genre: 'Scifi',
		year: '2019',
		description: "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'Star Wars: Episode VII - The Force Awakens',
		genre: 'Scifi',
		year: '2019',
		description: "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'Star Wars: Episode VIII - The Last Jedi',
		genre: 'Scifi',
		year: '2019',
		description: "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
	},
	{
		title: 'Star Wars: Episode IX - The Rise of Skywalker',
		genre: 'Scifi',
		year: '2019',
		description: "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
		imageUrl: '',
		price: '$27.99',
		inventory: '10'
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
