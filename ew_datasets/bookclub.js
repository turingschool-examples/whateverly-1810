const bookClub = {
  original_members: [
    'Eric Weissman',
    'Tyler Gamble',
    'Ryan Fuss',
    'Andrew Pompelia',
    'Ryan McDonnell',
    'Tim Solon',
    'Joe Laliberte'
  ],
  original_location: 'Colorado Springs, CO',
  current_members: 8,
  current_location: 'Denver, CO',
  founded: 2011,
  books: [
    {
      title: 'What We Talk About When We Talk About Love',
      author: 'Raymond Carver',
      about: '"That morning she pours Teacher\'s over my belly and licks it off. That afternoon she tries to jump out the window." And that\'s not even the best line.',
      read: false
    },
    {
      title: 'Collected Stories of John Cheever',
      author: 'John Cheever',
      about: 'He knew better than anyone the darkness that hides behind the costume of a carefully manicured lawn.',
      read: true
    },
    {
      title: 'Deliverance',
      author: 'James Dickey',
      about: 'A reminder of how close we are to animalism, and because there\'s so much more to the book than that scene.',
      read: true
    },
    {
      title: 'The Grapes of Wrath',
      author: 'John Steinbeck',
      about: 'Because it\'s all about the titty.',
      read: true
    },
    {
      title: 'Blood Meridian',
      author: 'Cormac McCarthy',
      about: 'Just try sleeping after the scene in which the Apaches thunder over the hills wearing the dresses of the brides they\'ve killed.',
      read: true
    },
    {
      title: 'The Brothers Karamazov',
      author: 'Fyodor Dostoevsky',
      about: 'Freud and Einstein both hailed it as a masterpiece, and Kurt Vonnegut claimed that everything you need to know in life is smashed down into this book. It still is.',
      read: false
    },
    {
      title: 'The Known World',
      author: 'Edward P. Jones',
      about: 'Free black people who own slaves. Slaves who know the world\'s brutality and, more shockingly, its beauty.',
      read: true
    },
    {
      title: 'The Good War',
      author: 'Studs Terkel',
      about: 'All you\'ll ever need to know about men, women, war, peace, work, home, and just who the people called Americans really are.',
      read: false
    },
    {
      title: 'American Pastoral',
      author: 'Philip Roth',
      about: 'One of the few not about Roth. It\'s about that guy you idolized in high school. And gloves. And you.',
      read: false
    },
    {
      title: 'A Good Man Is Hard to Find and Other Stories',
      author: 'Flannery O\'Connor',
      about: '"She would of been a good woman... if it had been somebody there to shoot her every minute of her life." Wouldn\'t we all.',
      read: false
    },
    {
      title: 'The Things They Carried',
      author: 'Tim O\'Brien',
      about: 'No one else has written so beautifully about human remains hanging from tree branches.',
      read: false
    },
    {
      title: 'A Sport and a Pastime',
      author: 'James Salter',
      about: 'Remember your college buddy\'s girlfriend, the one you were in love with? Because of her.',
      read: false
    },
    {
      title: 'The Call of the Wild',
      author: 'Jack London',
      about: 'A book about dogs is equally a book about men.',
      read: false
    },
    {
      title: 'Time\'s Arrow',
      author: 'Martin Amis',
      about: 'You\'ve never seen the Holocaust from this angle and with this much ferocity. Backwards.',
      read: true
    },
    {
      title: 'A Sense of Where You Are',
      author: 'John McPhee',
      about: 'It\'s about how two men can be made better just by sharing each other\'s company.',
      read: false
    },
    {
      title: 'Hell\'s Angels',
      author: 'Hunter S. Thompson',
      about: 'Because it\'s his first book, and because he got his ass kicked for it, and because in the book and the beating were the seeds of all that came after, including the bullet in the head.',
      read: true
    },
    {
      title: 'Invisible Man',
      author: 'Ralph Ellison',
      about: 'Born in an epic fist-fight or forgotten in the sewers, no character is as clearly heard as the man who is never really seen by the world around him.',
      read: false
    },
    {
      title: 'Dubliners',
      author: 'James Joyce',
      about: 'Plain and simple: "The Dead"',
      read: false
    },
    {
      title: 'Rabbit, Run',
      author: 'John Updike',
      about: 'Because it\'s one of the few not about Updike. It\'s about that guy you idolized in high school. And kitchen gadgets. And you.',
      read: true
    },
    {
      title: 'The Postman Always Rings Twice',
      author: 'James M. Cain',
      about: 'Teaches men about women. Also, there\'s not a single postman in the book.',
      read: false
    },
    {
      title: 'Dog Soldiers',
      author: 'Robert Stone',
      about: 'Begins in Saigon, ends in Death Valley. Somewhere in between you realize that profit is second only to survival.',
      read: true
    },
    {
      title: 'Winter\'s Bone',
      author: 'Daniel Woodrell',
      about: 'The best book by a modern-day Twain, high on meth, drousy with whiskey.',
      read: false
    },
    {
      title: 'Legends of the Fall',
      author: 'Jim Harrison',
      about: 'Because of revenge. Because Harrison is as masculine and raw and unrelenting as they come.',
      read: true
    },
    {
      title: 'Under the Volcano',
      author: 'Malcolm Lowry',
      about: 'A terrifying riderless horse, mescaline, and this line: "Somebody threw a dead dog after him down the ravine."',
      read: true
    },
    {
      title: 'The Naked and the Dead',
      author: 'Norman Mailer',
      about: 'His first book turned out to be his best book. The skulls of young men at war.',
      read: true
    },
    {
      title: 'The Professional',
      author: 'W.C. Heinz',
      about: 'It\'s about fighting, but it\'s also about watching and listening, and it\'s about patience, and honing, and craft, and sparseness, and beauty, and crushing, awful defeat.',
      read: true
    },
    {
      title: 'For Whom the Bell Tolls',
      author: 'Ernest Hemingway',
      about: 'A lesson in manhood: Even when you\'re damned, you press on.',
      read: true
    },
    {
      title: 'Dispatches',
      author: 'Michael Herr',
      about: '"Vietnam Vietnam Vietnam, we\'ve all been there." You\'ll never forget that line. You won\'t forget what precedes it, either.',
      read: true
    },
    {
      title: 'Tropic of Cancer',
      author: 'Henry Miller',
      about: 'Dirty, grotesque. Beautiful.',
      read: true
    },
    {
      title: 'Revolutionary Road',
      author: 'Richard Yates',
      about: 'The thousands of little compromises we make every day that eventually add up to the loss of ourselves.',
      read: true
    },
    {
      title: 'As I Lay Dying',
      author: 'William Faulkner',
      about: 'Because the man\'s cold brilliance enabled him to make the line "My mother is a fish," into a chapter in itself.',
      read: false
    },
    {
      title: 'The Killer Angels',
      author: 'Michael Shaara',
      about: 'Because the Battle of Gettysburg took place in that blue-gray area between black and white.',
      read: false
    },
    {
      title: 'Slaughterhouse-Five',
      author: 'Kurt Vonnegut',
      about: 'A mad hatter of an antiwar novel that understands how a smile, shaped like a sickle, can cut deeply. So it goes.',
      read: false
    },
    {
      title: 'All the King\'s Men',
      author: 'Robert Penn Warren',
      about: 'Crooked judges, concealed paternity, deception, betrayal, and lots of whiskey.',
      read: true
    },
    {
      title: 'One Flew Over the Cuckoo\'s Nest',
      author: 'Ken Kesey',
      about: 'Because sometimes you have to go crazy to stay sane.',
      read: false
    },
    {
      title: 'Sophie\'s Choice',
      author: 'William Styron',
      about: 'It\'s not about Sophie or her choice. It\'s about Stingo.',
      read: false
    },
    {
      title: 'A Fan\'s Notes',
      author: 'Frederick Exley',
      about: 'A crazy, irrational drunk who seems all too rational and familiar.',
      read: true
    },
    {
      title: 'Lucky Jim',
      author: 'Kingsley Amis',
      about: 'One of the best comedies of embarrassments ever written. And because you shouldn\'t underestimate the father. Especially this one.',
      read: true
    },
    {
      title: 'The Wind-Up Bird Chronicle',
      author: 'Haruki Murakami',
      about: 'Because of the woman trapped in the well that isn\'t really a well.',
      read: true
    },
    {
      title: 'Master and Commander',
      author: 'Patrick O\'Brian',
      about: 'Seafaring, swashbuckling awesomeness.',
      read: true
    },
    {
      title: 'Plainsong',
      author: 'Kent Haruf',
      about: 'Because: "A girl is different. They want things. They need things on a regular schedule. Why, a girl\'s got purposes you and me can\'t even imagine. They got ideas in their heads you and me can\'t even suppose."',
      read: false
    },
    {
      title: 'A Confederacy of Dunces',
      author: 'John Kennedy Toole',
      about: 'The fart joke as literature.',
      read: true
    },
    {
      title: 'Affliction',
      author: 'Russell Banks',
      about: 'Think Dostoevsky in bone-cold New Hampshire. Think lots of boozing and brawling. Do not think of ripping out your own tooth with a pair of pliers.',
      read: true
    },
    {
      title: 'This Boy\'s Life',
      author: 'Tobias Wolff',
      about: 'A Million Little Pieces -- the version that\'s true.',
      read: true
    },
    {
      title: 'Winter\'s Tale',
      author: 'Mark Helprin',
      about: 'Because every sentence is impossibly beautiful.',
      read: true
    },
    {
      title: 'The Adventures of Augie March',
      author: 'Saul Bellow',
      about: 'Because it starts like this: "I am an American, Chicago born -- Chicago, that somber city -- and go at things as I have taught myself, free-style, and will make the record in my own way: first to knock, first admitted; sometimes an innocent knock, sometimes a not so innocent." Or: because you\'re Augie.',
      read: false
    },
    {
      title: 'Women',
      author: 'Charles Bukowski',
      about: 'It\'s about Bukowski. And women. And sex. And you.',
      read: true
    },
    {
      title: 'Going Native',
      author: 'Stephen Wright',
      about: 'If Don DeLillo and Denis Johnson had a kid, his name would be Stephen Wright, and he would have written this book so they could read it to him before bed, and the whole shebang would make perfect, hallucinatory sense.',
      read: true
    },
    {
      title: 'Heart of Darkness',
      author: 'Joseph Conrad',
      about: 'Man is a powder keg with a short burning fuse to horror, horror.',
      read: false
    },
    {
      title: 'The Spy Who Came In From The Cold',
      author: 'John LeCarre',
      about: 'The best spy novel of all time.',
      read: true
    },
    {
      title: 'The Crack-Up',
      author: 'F. Scott Fitzgerald',
      about: 'Because Fitzgerald knew Lindsay, Britney and the Olsens better than we do.',
      read: false
    },
    {
      title: 'CivilWarLand in Bad Decline',
      author: 'George Saunders',
      about: 'Theme parks. Ghosts. Memory downloads. Corporate gibberish. Saunders picks up where Vonnegut left off.',
      read: true
    },
    {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      about: 'Because what else is there?',
      read: false
    },
    {
      title: 'The Shining',
      author: 'Stephen King',
      about: 'Imagine waking up to a swarm of wasps. Imagine a naked woman rotting in your hands. Imagine voices in the woodwork.',
      read: true
    },
    {
      title: 'Winesburg, Ohio',
      author: 'Sherwood Anderson',
      about: 'Because Anderson captures how each of us is mangled by the things we do to cope.',
      read: false
    },
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      about: 'The first American masterpiece. And perhaps the greatest.',
      read: true
    },
    {
      title: 'Midnight\'s Children',
      author: 'Salman Rushdie',
      about: 'Because beyond the hot ex-wife and the fatwa, Rushdie is actually a great writer, and this is his best book.',
      read: true
    },
    {
      title: 'Labyrinths',
      author: 'Jorge Luis Borges',
      about: 'Packs more into three pages than most writers pack into a career.',
      read: false
    },
    {
      title: 'The Right Stuff',
      author: 'Tom Wolfe',
      about: 'Fighter jocks join the space program. Space program tries to reprogram them. Fighter jocks fight back. What results is a new breed of hero: earthly Sinatras in outer space, hot-blooded rocket wranglers in a frigid mechanical future. And, in Wolfe\'s hands, an immortal barnburner.',
      read: true
    },
    {
      title: 'The Sportswriter',
      author: 'Richard Ford',
      about: 'Because Frank Bascombe is the new Zuckerman.',
      read: true
    },
    {
      title: 'American Tabloid',
      author: 'James Ellroy',
      about: 'Scandal, surveillance, and dirty journalism written in bulls-eye Americanese that crackles and ricochets like rifle fire.',
      read: true
    },
    {
      title: 'The Autobiography of Malcolm X',
      author: 'Alex Haley',
      about: 'Malcolm says it best: "People don\'t realize how a man\'s whole life can be changed by one book."',
      read: false
    },
    {
      title: 'What It Takes',
      author: 'Richard Ben Cramer',
      about: 'This is as close as you\'ll ever get to running for president.',
      read: true
    },
    {
      title: 'The Continental Op',
      author: 'Dashiell Hammett',
      about: 'The hard-boiled tough-guy detective -- the only pure American genre -- invented.',
      read: true
    },
    {
      title: 'The Power and the Glory',
      author: 'Graham Greene',
      about: 'A kind of flesh-bound Bible.',
      read: true
    },
    {
      title: 'So Long, See You Tomorrow',
      author: 'William Maxwell',
      about: 'Remember your best friend from childhood, the one who\'s gone? Because of him.',
      read: true
    },
    {
      title: 'Native Son',
      author: 'Richard Wright',
      about: 'Because the novel\'s main character asks this question: "Why were there so many [prison] cells?" Because the novel itself is the cruel answer.',
      read: false
    },
    {
      title: 'Let Us Now Praise Famous Men',
      author: 'James Agee and Walker Evans',
      about: 'The only truly accomplished partnership in America letters.',
      read: false
    },
    {
      title: 'Angle of Repose',
      author: 'Wallace Stegner',
      about: 'A gorgeous and gorgeously told story of a crippled man struggling to make sense of his grandparents\' lives and the coming desolation of the environment. The narrator is unreliable, prophetic, and inconveniently truthful.',
      read: true
    },
    {
      title: 'The Great Bridge',
      author: 'David McCullough',
      about: 'There is only one bridge.',
      read: false
    },
    {
      title: 'The Dharma Bums',
      author: 'Jack Kerouac',
      about: 'Because in the end, you won\'t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain.',
      read: true
    },
    {
      title: 'Lonesome Dove',
      author: 'Larry McMurtry',
      about: 'Two crabby old men, and one herd of cattle, cross the gut of a great, unformed nation. Episodic, elemental.',
      read: false
    },
    {
      title: 'Lolita',
      author: 'Vladimir Nabokov',
      about: 'So gymnastically lyrical. So damningly heartfelt. So horribly dirty. So, so good.',
      read: true
    },
    {
      title: 'Underworld',
      author: 'Don DeLillo',
      about: 'Because the first fifty pages rank, bar none, among the best pages ever written.',
      read: true
    },
    {
      title: 'The Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      about: 'Because a boy can disappear, a boy can survive on his own, a boy can become part of a nation\'s hopes for itself.',
      read: false
    },
    {
      title: 'Savages',
      author: 'Don Winslow',
      about: 'Because sometimes a book should just be fast and funny and full of drugs and sex and guns.',
      read: false
    },
    {
      title: 'The Orphan Master\'s Son',
      author: 'Adam Johnson',
      about: 'An astonishing feat of moral imagination, set in North Korea.',
      read: false
    },
    {
      title: 'Billy Lynn\'s Long Halftime Walk',
      author: 'Ben Fountain',
      about: 'Both the funniest and saddest book about America ever written.',
      read: true
    },
    {
      title: 'Let the Great World Spin',
      author: 'Colum McCann',
      about: 'The best book about September 11 is about New York before September 11. It\'s also by an Irishman. Go figure.',
      read: false
    },
    {
      title: 'The Road',
      author: 'Cormac McCarthy',
      about: 'Because he showed us just how long the road could be.',
      read: false
    },
    {
      title: 'The Son',
      author: 'Philip Meyer',
      about: 'As a young boy, he is taken in by the Comanche tribe that murdered his family. This multigenerational epic tracks his rise to one of the most powerful oil barons of his era.',
      read: true
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      about: 'Better than Star Wars. Sandworms.',
      read: true
    },
    {
      title: '1Q84',
      author: 'Haruki Murakami',
      about: 'Two unsuspecting lovers. Two moons. Two realities.',
      read: true
    },
    {
      title: 'A Brief History of 7 Killings',
      author: 'Marlon James',
      about: 'The assassination attempt of Bob Marley leads to a brutal and unexepected aftermath that spans decades and continents.',
      read: true
    },
    {
      title: 'The Electric Kool-Aid Acid Test',
      author: 'Tom Wolfe',
      about: 'Follow the wild adventures of Ken Kesey and his Merry Pranksters through the acid-laced accounts of the Pranksters themselves',
      read: true
    },
    {
      title: 'Blitzed',
      author: 'Norman Ohler',
      about: 'Drugs, Nazis, and Hitler.',
      read: true
    },
    {
      title: 'Pimp: The Story of My Life',
      author: 'Iceberg Slim',
      about: '"Slim breaksdown some of the coldest, capitalist concepts I\'ve ever heard in my life" - Dave Chappelle',
      read: false
    },
    {
      title: 'Shantaram',
      author: 'Gregory David Roberts',
      about: '"It took me a long time and most of the world to learn what I know about love and fate and the choices we make, but the heart of it came to me in an instant, while I was chained to a wall and being tortured."',
      read: false
    },
    {
      title: 'East of Eden',
      author: 'John Steinbeck',
      about: 'This epic family saga, chronicling the turbulent ambitions and desires of the Trasks and their neighbors in California\'s fertile Salinas Valley, is characterized by one fundamental theme: the need for a personal choice between good and evil.',
      read: false
    },
    {
      title: 'News of a Kidnapping',
      author: 'Gabriel Garcia Marquez',
      about: 'Pablo (Escobar, that is) being Pablo',
      read: false
    },
    {
      title: 'Black Wings Has My Angel',
      author: 'Elliott Chaze',
      about: 'Classic crime noir at it\'s finest set in 1950\'s Colorado',
      read: false
    },
    {
      title: 'The Stand',
      author: 'Steven King',
      about: 'King\'s crown jewel and masterpiece that explores the consequences and circumstances that impact us all when we consider good versus evil.',
      read: false
    }
  ]
}
