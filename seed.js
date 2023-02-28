const { db, User, Movie, Personnel } = require('./server/db/index')

const users = [
	{
		email: 'craig@admin.mail',
		password: 'admin1',
		fName: 'Craig',
		lName: 'Smith',
		type: 'Admin'
	},
	{
		email: 'lai@admin.mail',
		password: 'admin2',
		fName: 'Lai',
		lName: 'Saechao-Bazemore',
		type: 'Admin'
	},
	{
		email: 'ron@admin.mail',
		password: 'admin3',
		fName: 'Ron',
		lName: 'Basnet',
		type: 'Admin'
	},
	{
		email: 'mohammad@admin.mail',
		password: 'admin4',
		fName: 'Mohammad',
		lName: 'Saad',
		type: 'Admin'
	},
	{
		email: 'jake@admin.mail',
		password: 'admin5',
		fName: 'Jake',
		lName: 'Curtis',
		type: 'Admin'
	},
	{
		email: 'luke@admin.mail',
		password: 'admin6',
		fName: 'Luke',
		lName: 'Jones',
		type: 'Admin'
	},
	{
		email: 'user1@customer.mail',
		password: 'password1',
		fName: 'Samwise',
		lName: 'Gamgee',
		type: 'customer'
	},
	{
		email: 'user2@customer.mail',
		password: 'password2',
		fName: 'Samuel',
		lName: 'Glamgy',
		type: 'customer'
	},
	{
		email: 'user3@customer.mail',
		password: 'password3',
		fName: 'Fred',
		lName: 'Bagson',
		type: 'customer'
	},
	{
		email: 'user4@customer.mail',
		password: 'password4',
		fName: 'Gerald',
		lName: 'Rivers',
		type: 'customer'
	},
	{
		email: 'user5@customer.mail',
		password: 'password5',
		fName: 'Jennifer',
		lName: 'Ventley',
		type: 'customer'
	},
	{
		email: 'user6@customer.mail',
		password: 'password6',
		fName: 'Arthur',
		lName: 'Kingsly',
		type: 'customer'
	},
	{
		email: 'user7@customer.mail',
		password: 'password7',
		fName: 'John',
		lName: 'Buckingham',
		type: 'customer'
	},
	{
		email: 'user8@customer.mail',
		password: 'password8',
		fName: 'Parker',
		lName: 'Peterson',
		type: 'customer'
	},
	{
		email: 'user9@customer.mail',
		password: 'password9',
		fName: 'Matt',
		lName: 'Wurst',
		type: 'customer'
	},
	{
		email: 'user10@customer.mail',
		password: 'password10',
		fName: 'Jane',
		lName: 'Fawning',
		type: 'customer'
	}
];

const movies = [

	{
		title: 'The Hobbit',
		genre: 'Fantasy',
		year: 1977,
		description: "A homebody hobbit in Middle Earth gets talked into joining a quest with a group of dwarves to recover their treasure from a dragon.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Lord of the Rings',
		genre: 'Fantasy',
		year: 1978,
		description: "The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron's reign over Middle-earth.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Return of the King',
		genre: 'Fantasy',
		year: 1980,
		description: "Two Hobbits struggle to destroy the Ring in Mount Doom while their friends desperately fight evil Lord Sauron's forces in a final battle.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		genre: 'Fantasy',
		year: 2001,
		description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Lord of the Rings: The Two Towers',
		genre: 'Fantasy',
		year: 2002,
		description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Lord of the Rings: The Return of the King',
		genre: 'Fantasy',
		year: 2003,
		description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Hobbit: An Unexpected Journey',
		genre: 'Fantasy',
		year: 2012,
		description: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Hobbit: The Desolation of Smaug',
		genre: 'Fantasy',
		year: 2013,
		description: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Hobbit: The Battle of the Five Armies',
		genre: 'Fantasy',
		year: 2014,
		description: "Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Lord of the Rings: The Rings of Power (Season 1)',
		genre: 'Fantasy',
		year: 2022,
		description: "Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth.",
		price: 19.99,
		inventory: 10
	},
	{
		title: 'VeggieTales: Lord of the Beans',
		genre: 'Fantasy',
		year: 2005,
		description: "A lesson in using your gifts told in a manner of JRR Tolkien's classic 'The Lord of the Rings.'",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Mowgli: Legend of the Jungle',
		genre: 'Action/Adventure',
		year: 2018,
		description: "A human child raised by wolves must face off against a menacing tiger named Shere Khan, as well as his own origins.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Iron Man',
		genre: 'Action/Adventure',
		year: 2008,
		description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Incredible Hulk',
		genre: 'Action/Adventure',
		year: 2008,
		description: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Iron Man 2',
		genre: 'Action/Adventure',
		year: 2010,
		description: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Thor',
		genre: 'Action/Adventure',
		year: 2011,
		description: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Captain America: The First Avenger',
		genre: 'Action/Adventure',
		year: 2011,
		description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Avengers',
		genre: 'Action/Adventure',
		year: 2012,
		description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Iron Man 3',
		genre: 'Action/Adventure',
		year: 2013,
		description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Thor: The Dark World',
		genre: 'Action/Adventure',
		year: 2013,
		description: "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Captain America: The Winter Soldier',
		genre: 'Action/Adventure',
		year: 2014,
		description: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Guardians of the Galaxy',
		genre: 'Action/Adventure',
		year: 2014,
		description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Avengers: Age of Ultron',
		genre: 'Action/Adventure',
		year: 2015,
		description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Ant-Man',
		genre: 'Action/Adventure',
		year: 2015,
		description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Captain America: Civil War',
		genre: 'Action/Adventure',
		year: 2016,
		description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Doctor Strange',
		genre: 'Action/Adventure',
		year: 2016,
		description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Guardians of the Galaxy Vol. 2',
		genre: 'Action/Adventure',
		year: 2017,
		description: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Spider-Man: Homecoming',
		genre: 'Action/Adventure',
		year: 2017,
		description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Thor: Ragnarok',
		genre: 'Action/Adventure',
		year: 2017,
		description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Black Panther',
		genre: 'Action/Adventure',
		year: 2018,
		description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Avengers: Infinity War',
		genre: 'Action/Adventure',
		year: 2018,
		description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Ant-Man and the Wasp',
		genre: 'Action/Adventure',
		year: 2018,
		description: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Captain Marvel',
		genre: 'Action/Adventure',
		year: 2019,
		description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Avengers: Endgame',
		genre: 'Action/Adventure',
		year: 2019,
		description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Spider-Man: Far From Home',
		genre: 'Action/Adventure',
		year: 2019,
		description: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Black Widow',
		genre: 'Action/Adventure',
		year: 2019,
		description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Shang-Chi and the Legend of the Ten Rings',
		genre: 'Action/Adventure',
		year: 2021,
		description: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Eternals',
		genre: 'Action/Adventure',
		year: 2021,
		description: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Spider-Man: No Way Home',
		genre: 'Action/Adventure',
		year: 2021,
		description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Doctor Strange in the Multiverse of Madness',
		genre: 'Action/Adventure',
		year: 2022,
		description: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Thor: Love and Thunder',
		genre: 'Action/Adventure',
		year: 2022,
		description: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Black Panther: Wakanda Forever',
		genre: 'Action/Adventure',
		year: 2022,
		description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Ant-Man and the Wasp: Quantumania',
		genre: 'Action/Adventure',
		year: 2023,
		description: "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Star Wars: Episode I - The Phantom Menace',
		genre: 'Science Fiction',
		year: 1999,
		description: "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Star Wars: Episode II - Attack of the Clones',
		genre: 'Science Fiction',
		year: 2002,
		description: "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi discovers a secret clone army crafted for the Jedi.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Star Wars: Episode III - Revenge of the Sith',
		genre: 'Science Fiction',
		year: 2005,
		description: "Three years into the Clone Wars, Obi-Wan pursues a new threat, while Anakin is lured by Chancellor Palpatine into a sinister plot to rule the galaxy.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Star Wars: Episode IV - A New Hope',
		genre: 'Science Fiction',
		year: 1977,
		description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Star Wars: Episode V - The Empire Strikes Back',
		genre: 'Science Fiction',
		year: 1980,
		description: "After the Rebels are overpowered by the Empire, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Star Wars: Episode VI - Return of the Jedi',
		genre: 'Science Fiction',
		year: 1983,
		description: "After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Star Wars: Episode VII - The Force Awakens',
		genre: 'Science Fiction',
		year: 2015,
		description: "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Star Wars: Episode VIII - The Last Jedi',
		genre: 'Science Fiction',
		year: 2017,
		description: "The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: 'Star Wars: Episode IX - The Rise of Skywalker',
		genre: 'Science Fiction',
		year: 2019,
		description: "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: "Harry Potter and the Sorcerer's Stone",
		genre: 'Fantasy',
		year: 2001,
		description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: "Harry Potter and the Chamber of Secrets",
		genre: 'Fantasy',
		year: 2002,
		description: "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: "Harry Potter and the Prisoner of Azkaban",
		genre: 'Fantasy',
		year: 2004,
		description: "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: "Harry Potter and the Goblet of Fire",
		genre: 'Fantasy',
		year: 2005,
		description: "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: "Harry Potter and the Order of the Pheonix",
		genre: 'Fantasy',
		year: 2007,
		description: "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: "Harry Potter and the Half-Blood Prince",
		genre: 'Fantasy',
		year: 2009,
		description: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: "Harry Potter and the Deathly Hallows: Part 1",
		genre: 'Fantasy',
		year: 2010,
		description: "As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: "Harry Potter and the Deathly Hallows: Part 2",
		genre: 'Fantasy',
		year: 2011,
		description: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: "Fantastic Beasts and Where to Find Them",
		genre: 'Fantasy',
		year: 2016,
		description: "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: "Fantastic Beasts: The Crimes of Grindelwald",
		genre: 'Fantasy',
		year: 2018,
		description: "The second installment of the 'Fantastic Beasts' series featuring the adventures of Magizoologist Newt Scamander.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	},
	{
		title: "Fantastic Beasts: The Secrets of Dumbledore",
		genre: 'Fantasy',
		year: 2022,
		description: "Professor Albus Dumbledore must assist Newt Scamander and his partners as Grindelwald begins to lead an army to eliminate all Muggles.",
		imageUrl: '',
		price: 19.99,
		inventory: 10
	}
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
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
    type: 'Actor',
    details: 'Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!',
    imageUrl: '',
    movieId: ''
  },
  {
    fName: 'First',
    lName: 'Last',
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
