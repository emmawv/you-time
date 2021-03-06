function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee',
    description:
      "Through the young eyes of Scout and Jem Finch, Harper Lee explores with exuberant humour the irrationality of adult attitudes to race and class in the Deep South of the thirties. The conscience of a town steeped in prejudice, violence and hypocrisy is pricked by the stamina of one man's struggle for justice. But the weight of history will only tolerate so much.",
    status: 'AVAILABLE',
    price: 599,
    photo: {
      id: '602eb7e0654c120c761144f1',
      filename: 'ToKillAMockingbird.jpg',
      originalFilename: 'ToKillAMockingbird.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/602eb7df654c120c761144f0',
        version: 1613674463,
        signature: '40e714e149c0a55bbc0a5165f55a44137a2372d3',
        width: 311,
        height: 499,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 33760,
        type: 'upload',
        etag: '29717bde7b00b96c3df325ac60a22187',
        placeholder: false,
        url:
          'https://res.cloudinary.com/utime/image/upload/v1613674463/UTime/602eb7df654c120c761144f0.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613674463/UTime/602eb7df654c120c761144f0.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: "One Flew Over The Cuckoo's Nest",
    author: 'Ken Kesey',
    description:
      "Tyrannical Nurse Ratched rules her ward in an Oregon State mental hospital with a strict and unbending routine, unopposed by her patients, who remain cowed by mind-numbing medication and the threat of electroshock therapy. But her regime is disrupted by the arrival of McMurphy - the swaggering, fun-loving trickster with a devilish grin who resolves to oppose her rules on behalf of his fellow inmates. His struggle is seen through the eyes of Chief Bromden, a seemingly mute half-Indian patient who understands McMurphy's heroic attempt to do battle with the powers that keep them imprisoned. The subject of an Oscar-winning film starring Jack Nicholson, One Flew Over the Cuckoo's Nest an exuberant, ribald and devastatingly honest portrayal of the boundaries between sanity and madness.",
    status: 'AVAILABLE',
    price: 795,
    photo: {
      id: '602ebaaf654c120c761144f2',
      filename: 'CuckoosNest.jpg',
      originalFilename: 'CuckoosNest.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/602ebaaf654c120c761144f2',
        version: 1613674463,
        signature: 'a0ba98733a71bc8a26d1591fd4aa050bf77647ca',
        width: 326,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 38884,
        type: 'upload',
        etag: 'eed0d6e04c632ed0510141d5750d93b4',
        placeholder: false,
        url:
          'https://res.cloudinary.com/utime/image/upload/v1613675184/UTime/602ebaaf654c120c761144f2.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613675184/UTime/602ebaaf654c120c761144f2.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:20.833Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:20.833Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    description:
      "The tale of Heathcliff and Cathy's ungovernable love and suffering, and the havoc that their passion wreaks on the families of the Earnshaws and the Lintons, shocked the book's first readers, with even Emily's sister Charlotte wondering 'whether it is right or advisable to create beings like Heathcliff'. Replete with unforgettable characters and situations that have seared themselves into our literary consciousness, Emily Brontë's intense masterpiece is one of the most haunting love stories in the canon of English literature.",
    status: 'AVAILABLE',
    price: 539,
    photo: {
      id: '6030e50e6c1fa720f22c40ff',
      filename: 'WutheringHeights.jpg',
      originalFilename: 'WutheringHeights.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/6030e50e6c1fa720f22c40ff',
        version: 1613817103,
        signature: '2bb134d86b03a997015a75fcca3b57362b6489b5',
        width: 327,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 34241,
        type: 'upload',
        etag: 'a6cbaadbc1d6044685e776439ecd6813',
        placeholder: false,
        url:
          'http://res.cloudinary.com/utime/image/upload/v1613817103/UTime/6030e50e6c1fa720f22c40ff.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613817103/UTime/6030e50e6c1fa720f22c40ff.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description:
      "Young, handsome and fabulously rich, Jay Gatsby is the bright star of the Jazz Age, but as writer Nick Carraway is drawn into the decadent orbit of his Long Island mansion, where the party never seems to end, he finds himself faced by the mystery of Gatsby's origins and desires. Beneath the shimmering surface of his life, Gatsby is hiding a secret: a silent longing that can never be fulfilled. And soon, this destructive obsession will force his world to unravel.",
    status: 'AVAILABLE',
    price: 576,
    photo: {
      id: '602ebfb9654c120c761144f6',
      filename: 'TheGreatGatsby.jpg',
      originalFilename: 'TheGreatGatsby.jpg',
      mimetype: 'image/png',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/602ebfb9654c120c761144f6',
        version: 1613676474,
        signature: '8c80ada98ff57ebf7c838c946042564265077c18',
        width: 327,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 31000,
        type: 'upload',
        etag: 'abab2ed0d08c97f703c56eb881ed06b4',
        placeholder: false,
        url:
          'http://res.cloudinary.com/utime/image/upload/v1613676474/UTime/602ebfb9654c120c761144f6.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613676474/UTime/602ebfb9654c120c761144f6.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:58.336Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:58.336Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: 'The Catcher In The Rye',
    author: 'J. D. Salinger',
    description:
      'The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days. The boy himself is at once too simple and too complex for us to make any final comment about him or his story. Perhaps the safest thing we can say about Holden is that he was born in the world not just strongly attracted to beauty but, almost, hopelessly impaled on it.',
    status: 'AVAILABLE',
    price: 682,
    photo: {
      id: '602ec52f654c120c76114510',
      filename: 'TheCatcherInTheRye.jpg',
      originalFilename: 'TheCatcherInTheRye.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/602ec52f654c120c76114510',
        version: 1613677872,
        signature: '9cbbbf7bf390a0c5b4f976eedeb0d5b6d1513c75',
        width: 326,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 15720,
        type: 'upload',
        etag: 'ba98d4a8573c6e3158624ccca402d2f7',
        placeholder: false,
        url:
          'http://res.cloudinary.com/utime/image/upload/v1613677872/UTime/602ec52f654c120c76114510.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613677872/UTime/602ec52f654c120c76114510.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:21.015Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:21.015Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: 'Mrs Dalloway',
    author: 'Virginia Woolf',
    description:
      "Clarissa Dalloway, elegant and vivacious, is preparing for a party and remembering those she once loved. In another part of London, Septimus Warren Smith is suffering from shell-shock and on the brink of madness. Smith's day interweaves with that of Clarissa and her friends, their lives converging as the party reaches its glittering climax.",
    status: 'AVAILABLE',
    price: 639,
    photo: {
      id: '602ec736654c120c76114512',
      filename: 'MrsDalloway.jpg',
      originalFilename: 'MrsDalloway.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/602ec736654c120c76114512',
        version: 1613678391,
        signature: '38971bd980f7a7735324ae8e87d1e2f79697ea81',
        width: 364,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 42486,
        type: 'upload',
        etag: 'e660ddae401bc4bc4be29d06e4901ead',
        placeholder: false,
        url:
          'http://res.cloudinary.com/utime/image/upload/v1613678391/UTime/602ec736654c120c76114512.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613678391/UTime/602ec736654c120c76114512.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:40.526Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:40.526Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: 'Lord Of The Flies',
    author: 'William Golding',
    description:
      "A plane crashes on a desert island. The only survivors are a group of schoolboys. By day, they discover fantastic wildlife and dazzling beaches, learning to survive; at night, they are haunted by nightmares of a primitive beast. Orphaned by society, it isn't long before their innocent childhood games devolve into a savage, murderous hunt...",
    status: 'AVAILABLE',
    price: 695,
    photo: {
      id: '602ecb38654c120c76114514',
      filename: 'LordOfTheFlies.jpg',
      originalFilename: 'LordOfTheFlies.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/602ecb38654c120c76114514',
        version: 1613679417,
        signature: 'a31848ff1d0e1d8eba425587cf3f3359d5833fac',
        width: 317,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 51751,
        type: 'upload',
        etag: 'f52aef91e4f865625568f684730fc028',
        placeholder: false,
        url:
          'http://res.cloudinary.com/utime/image/upload/v1613679417/UTime/602ecb38654c120c76114514.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613679417/UTime/602ecb38654c120c76114514.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:11.415Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:11.415Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    description:
      "Anna is desperately pursuing a good, 'moral' life, standing for honesty and sincerity. Passion drives her to adultery, and this flies in the face of the corrupt Russian bourgeoisie. Meanwhile, the aristocrat Konstantin Levin is struggling to reconcile reason with passion, espousing a Christian anarchism that Tolstoy himself believed in.",
    status: 'AVAILABLE',
    price: 599,
    photo: {
      id: '602ec860654c120c76114513',
      filename: 'AnnaKarenina.jpg',
      originalFilename: 'AnnaKarenina.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/602ec860654c120c76114513',
        version: 1613678689,
        signature: '7d1f9d2c370d8fe2c3672f5626b749e61867542b',
        width: 331,
        height: 500,
        format: 'jpeg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 953657,
        type: 'upload',
        etag: '05c12d57f7958768262914b181fd563e',
        placeholder: false,
        url:
          'http://res.cloudinary.com/utime/image/upload/v1613678689/UTime/602ec860654c120c76114513.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613678689/UTime/602ec860654c120c76114513.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:41.358Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:41.358Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    description:
      '1939. Europe teeters on the brink of war. Ten strangers are invited to Soldier Island, an isolated rock near the Devon coast. Cut off from the mainland, with their generous hosts Mr and Mrs U.N. Owen mysteriously absent, they are each accused of a terrible crime. When one of the party dies suddenly they realise they may be harbouring a murderer among their number. One by one they are picked off. Who will survive? And who is the killer?',
    status: 'AVAILABLE',
    price: 699,
    photo: {
      id: '602ec0a0654c120c76114508',
      filename: 'AndThenThereWereNone.jpg',
      originalFilename: 'AndThenThereWereNone.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/602ec0a0654c120c76114508',
        version: 1613676705,
        signature: '538464bf5d82279d80cbc7b34ad5653d6b399b3e',
        width: 326,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 37316,
        type: 'upload',
        etag: '2ea4828dbe3197fd5decb24478c3b9ca',
        placeholder: false,
        url:
          'http://res.cloudinary.com/utime/image/upload/v1613676705/UTime/602ec0a0654c120c76114508.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613676705/UTime/602ec0a0654c120c76114508.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:13.812Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:13.812Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott',
    description:
      'This novel follows the family of the four March sisters living in a small New England community. The story of their domestic adventures, their attempts to increase the family income, their friendship with the neighbouring Laurence family and their later love affairs.',
    status: 'AVAILABLE',
    price: 594,
    photo: {
      id: '6030f6a06c1fa720f22c4101',
      filename: 'LittleWomen.jpg',
      originalFilename: 'LittleWomen.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/6030f6a06c1fa720f22c4101',
        version: 1613821601,
        signature: 'ab410a6a6539e7005c4c0a13d91b3d537aebe873',
        width: 333,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 37356,
        type: 'upload',
        etag: '141b973d91f185f3328fd17c545631a9',
        placeholder: false,
        url:
          'http://res.cloudinary.com/utime/image/upload/v1613821601/UTime/6030f6a06c1fa720f22c4101.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613821601/UTime/6030f6a06c1fa720f22c4101.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:34.398Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:34.398Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    description:
      'Novel set in a not-too-distant future where books are burned by a special task force of firemen. Guy Montag is a fireman. His job is to burn books, which are forbidden, being the source of all discord and unhappiness. Even so, Montag is unhappy; there is discord in his marriage. Are books hidden in his house? The Mechanical Hound of the Fire Department, armed with a lethal hypodermic, escorted by helicopters, is ready to track down those dissidents who defy society to preserve and read books.',
    status: 'AVAILABLE',
    price: 640,
    photo: {
      id: '603122296c1fa720f22c4103',
      filename: 'Fahrenheit451.jpg',
      originalFilename: 'Fahrenheit451.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/603122296c1fa720f22c4103',
        version: 1613832746,
        signature: 'c0b8602a940f69b8f7cced79282d7a122e7c5d06',
        width: 321,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 28170,
        type: 'upload',
        etag: 'b1506961538f4b011381b240c49480fe',
        placeholder: false,
        url:
          'http://res.cloudinary.com/utime/image/upload/v1613832746/UTime/603122296c1fa720f22c4103.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613832746/UTime/603122296c1fa720f22c4103.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:48.633Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:48.633Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    description:
      'When the downtrodden animals of Manor Farm overthrow their master Mr Jones and take over the farm themselves, they imagine it is the beginning of a life of freedom and equality. But gradually a cunning, ruthless élite among them, masterminded by the pigs Napoleon and Snowball, starts to take control. Soon the other animals discover that they are not all as equal as they thought, and find themselves hopelessly ensnared as one form of tyranny is replaced with another.',
    status: 'AVAILABLE',
    price: 585,
    photo: {
      id: '60312cd16c1fa720f22c4107',
      filename: 'AnimalFarm.jpg',
      originalFilename: 'AnimalFarm.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/60312cd16c1fa720f22c4107',
        version: 1613835474,
        signature: '2b74e9c2359acf605caf70ae98c527afbbdc3e4d',
        width: 326,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 45912,
        type: 'upload',
        etag: '0f9813d48e743ba6b7d596e0ee0dfa18',
        placeholder: false,
        url:
          'http://res.cloudinary.com/utime/image/upload/v1613835474/UTime/60312cd16c1fa720f22c4107.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613835474/UTime/60312cd16c1fa720f22c4107.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:49:01.569Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:49:01.569Z',
    // createdAt_offset: '+00:00',
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    description:
      'A searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order--all at the cost of their freedom, full humanity, and perhaps also their souls.',
    status: 'AVAILABLE',
    price: 599,
    photo: {
      id: '603122fa6c1fa720f22c4105',
      filename: 'BraveNewWorld.jpg',
      originalFilename: 'BraveNewWorld.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'UTime/603122fa6c1fa720f22c4105',
        version: 1613832955,
        signature: 'c8d4e88a744299b568f2776b4f1ab6138a7cff44',
        width: 325,
        height: 500,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 48119,
        type: 'upload',
        etag: 'e78904d6aa318b0f8144311ee1159b45',
        placeholder: false,
        url:
          'http://res.cloudinary.com/utime/image/upload/v1613832955/UTime/603122fa6c1fa720f22c4105.jpg',
        secure_url:
          'https://res.cloudinary.com/utime/image/upload/v1613832955/UTime/603122fa6c1fa720f22c4105.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:49:01.569Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:49:01.569Z',
    // createdAt_offset: '+00:00',
  },
];
