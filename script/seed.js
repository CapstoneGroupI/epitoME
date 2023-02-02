"use strict";

const {
  db,
  models: { User, Post, Comment, Follower, Message },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: "Cody",
      password: "123",
      email: "cody@gmail.com",
      firstName: "Cody",
      lastName: "Cody",
      pronouns: "he/him",
      city: "New York",
      state: "NY",
      isAdmin: false,
      rating: 5.0,
    }),
    User.create({
      username: "Murphy",
      password: "123",
      email: "Murphy@gmail.com",
      firstName: "Murphy",
      lastName: "Murphy",
      pronouns: "he/him",
      city: "New York",
      state: "NY",
      isAdmin: false,
      rating: 5.0,
    }),
    User.create({
      username: "cupofjoey",
      password: "321",
      email: "sightower@gmail.com",
      birthday: "11-15-1999",
      profilePic: "https://photos.google.com/share/AF1QipMG_QwhMxuP7V0Ay0xmb8okjniGwx6ja6M6yQm2Of0LYZfnG8QdrPmr-Pp7F14V4g/photo/AF1QipP4CiyRPnkSI2iR9anrVDh_EmDElEiH84egaat9?key=RTdVNkpmOTVtMVJVNVNJRGdPSTE5ckUwZnJXdjN3",
      firstName: "Sarah",
      lastName: "Hightower",
      pronouns: "she/her",
      city: "Bakersfield",
      state: "CA",
      isAdmin: true,
      rating: 5.0,
    }),
    User.create({
      username: "tomhanks",
      password: "123",
      email: "tomHanks@gmail.com",
      firstName: "Tom",
      lastName: "Hanks",
      pronouns: "he/him",
      city: "Hollywood",
      state: "CA",
      isAdmin: false,
      profilePic:
        "https://www.denofgeek.com/wp-content/uploads/2022/05/Tom-Hanks-as-Forrest-Gump.jpeg?fit=1200%2C714",
        rating: 5.0,
    }),
    User.create({
      username: "barack.obama",
      password: "123",
      email: "barack.obama@gmail.com",
      firstName: "Barack",
      lastName: "Obama",
      pronouns: "he/him",
      city: "Washington DC",
      state: "VA",
      isAdmin: false,
      profilePic:
        "https://brenebrown.com/wp-content/uploads/2021/10/DTL_PresidentBarackObama_Arapawa_Dark.jpg",
        rating: 5.0,
    }),
    User.create({
      username: "selenagomez",
      password: "123",
      email: "selenagomez@gmail.com",
      firstName: "Selena",
      lastName: "Gomez",
      pronouns: "she/her",
      city: "Hollywood",
      state: "CA",
      isAdmin: false,
      profilePic:
        "https://1159025897.rsc.cdn77.org/data/images/full/83167/selena-gomez.jpg",
        rating: 5.0,
    }),
    User.create({
      username: "dwyaneWade",
      password: "123",
      email: "dwyaneWade@gmail.com",
      firstName: "Dwyane",
      lastName: "Wade",
      pronouns: "he/him",
      city: "Miami",
      state: "FL",
      isAdmin: false,
      profilePic: "https://cdn.nba.com/headshots/nba/latest/1040x760/2548.png",
      rating: 5.0,
    }),
    User.create({
      username: "madonna",
      password: "123",
      email: "madonna@gmail.com",
      firstName: "Madonna",
      lastName: "Madonna",
      pronouns: "she/her",
      city: "Bay City",
      state: "MI",
      isAdmin: false,
      profilePic:
        "https://resizing.flixster.com/N2cuekNI5Fxb85yQcbKxt0VjjJk=/218x280/v2/https://flxt.tmsimg.com/assets/69735_v9_bb.jpg",
        rating: 5.0,
    }),
    User.create({
      username: "scarjo",
      password: "123",
      email: "scarjo@gmail.com",
      firstName: "Scarlett",
      lastName: "Johannsen",
      pronouns: "she/her",
      city: "New York City",
      state: "NY",
      isAdmin: false,
      profilePic:
        "https://media.glamour.com/photos/61b35f5a1aa98c846d8ee540/master/w_2560%2Cc_limit/GettyImages-1205142069.jpg",
    }),
    User.create({
      username: "peytonManning",
      password: "123",
      email: "peytonManning@gmail.com",
      firstName: "Peyton",
      lastName: "Manning",
      pronouns: "he/him",
      city: "Indianapolis",
      state: "IN",
      isAdmin: false,
      profilePic:
        "https://cbs4indy.com/wp-content/uploads/sites/22/2021/02/GettyImages-93078553-e1626727052404.jpg?w=1280",
    }),
    User.create({
      username: "DaveChappelle",
      password: "123",
      email: "DaveChappelle@gmail.com",
      firstName: "Dave",
      lastName: "Chappelle",
      pronouns: "he/him",
      city: "Washington DC",
      state: "VA",
      isAdmin: false,
      profilePic:
        "https://s1.ticketm.net/dam/a/802/4c54bbf8-b7a8-412b-876e-aab2bb3d3802_1561351_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    }),
    User.create({
      username: "CaliforniaGurl",
      password: "123",
      email: "KatyPerry@gmail.com",
      firstName: "Katy",
      lastName: "Perry",
      pronouns: "she/her",
      city: "Santa Barbara",
      state: "CA",
      isAdmin: false,
      profilePic:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_22/1725706/katy-perry-kb-main-210601.jpg",
    }),
    User.create({
      username: "Beyonce",
      password: "123",
      email: "Beyonce@gmail.com",
      firstName: "Beyonce",
      lastName: "Knowles",
      pronouns: "she/her",
      city: "Houston",
      state: "TX",
      isAdmin: false,
      profilePic:
        "https://cdn.britannica.com/51/188751-050-D4E1CFBC/Beyonce-2010.jpg",
    }),
    User.create({
      username: "MorganFreeman",
      password: "123",
      email: "MorganFreeman@gmail.com",
      firstName: "Morgan",
      lastName: "Freeman",
      pronouns: "he/him",
      city: "Memphis",
      state: "TN",
      isAdmin: false,
      profilePic:
        "https://www.themoviedb.org/t/p/w500/jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
    }),
    User.create({
      username: "NataliePortman",
      password: "123",
      email: "NataliePortman@gmail.com",
      firstName: "Natalie",
      lastName: "Portman",
      pronouns: "she/her",
      city: "Hollyood",
      state: "CA",
      isAdmin: false,
      profilePic:
        "https://images.mubicdn.net/images/cast_member/3138/cache-488404-1615052280/image-w856.jpg",
    }),
    User.create({
      username: "ElCapitan",
      password: "123",
      email: "DerekJeter@gmail.com",
      firstName: "Derek",
      lastName: "Jeter",
      pronouns: "he/him",
      city: "Bronx",
      state: "NY",
      isAdmin: false,
      profilePic:
        "https://people.com/thmb/1qoHZ1bGQkAyI6Wiz67dcAI1sWk=/400x262/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/derek-jeter-0c756fef46934a69ada11240c5513f46.jpg",
    }),
    User.create({
      username: "DonaldMAGA",
      password: "123",
      email: "DonaldTrump@gmail.com",
      firstName: "Donald",
      lastName: "Trump",
      pronouns: "he/him",
      city: "New York City",
      state: "NY",
      isAdmin: false,
      profilePic: "https://pbs.twimg.com/media/Erao8GsVEAIB3ZJ.jpg",
    }),
    User.create({
      username: "FloydMayweather",
      password: "123",
      email: "FloydMayweather@gmail.com",
      firstName: "Floyd",
      lastName: "Mayweather",
      pronouns: "he/him",
      city: "Grand Rapids",
      state: "MI",
      isAdmin: false,
      profilePic:
        "https://img.olympicchannel.com/images/image/private/f_auto/t_1-1_300/primary/xzikbu9gm4ferp7j4ann",
    }),
    User.create({
      username: "SerenaWilliams",
      password: "123",
      email: "SerenaWilliams@gmail.com",
      firstName: "Serena",
      lastName: "Williams",
      pronouns: "she/her",
      city: "Saginaw",
      state: "MI",
      isAdmin: false,
      profilePic:
        "https://ca-times.brightspotcdn.com/dims4/default/ef756cf/2147483647/strip/true/crop/1728x1152+160+0/resize/2000x1333!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F43%2F98%2Fd1cf186ffdf2fe215346bba89750%2Fla-1467409250-snap-photo",
    }),
    User.create({
      username: "Yeezy",
      password: "123",
      email: "KanyeWest@gmail.com",
      firstName: "Kanye",
      lastName: "West",
      pronouns: "he/him",
      city: "Atlanta",
      state: "GA",
      isAdmin: false,
      profilePic:
        "https://pagesix.com/wp-content/uploads/sites/3/2021/10/kanye-name-change.jpg?quality=75&strip=all&w=618&h=410&crop=1",
    }),
    User.create({
      username: "TeslaRules",
      password: "123",
      email: "elonMusk@gmail.com",
      firstName: "Elon",
      lastName: "Musk",
      pronouns: "he/him",
      city: "Hawthorne",
      state: "CA",
      isAdmin: false,
      profilePic:
        "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1240408699_524643_a4gklo.jpg",
    }),
    User.create({
      username: "MicrosoftRules",
      password: "123",
      email: "BillGates@gmail.com",
      firstName: "Bill",
      lastName: "Gates",
      pronouns: "he/him",
      city: "Seattle",
      state: "WA",
      isAdmin: false,
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29_%28cropped%29.jpg",
    }),
  ]);

  const post = await Promise.all([
    Post.create({
      text: "I love posting",
      n_likes: 3,
      n_comments: 2,
      image: "https://www.livinginhawaii.com/wp-content/uploads/2019/01/ftp7/18509322244_ddf6e3213b_o.jpg",
      userId: 6
    }),
    Post.create({
      text: "Hawaii is cool",
      n_likes: 20,
      n_comments: 100,
      userId: 3
    }),
    Post.create({ 
      text: 'My dog loves peanutbutter',
      n_likes: 9,
      n_comments: 10,
      image: "https://www.livinginhawaii.com/wp-content/uploads/2019/01/ftp7/18509322244_ddf6e3213b_o.jpg",
      userId: 9
         }),
         Post.create({
          text: "Loving life",
          n_likes: 20,
          n_comments: 44,
          userId: 3
        }),
        Post.create({
          text: "Lets go on vacation",
          n_likes: 20,
          n_comments: 22,
          userId: 5
        }),
  ]);

  const comment = await Promise.all([
    Comment.create({
      text: "this is such a good post",
    }),
    Comment.create({
      text: "great job",
    }),
  ]);

  const message = await Promise.all([
    Message.create({
      text: "How are you",
    }),
    Message.create({
      text: "Whats up",
    }),
  ]);

  const follower = await Promise.all([Follower.create({})]);

  // const createUserDatabase = (num) => {
  //   const arr = [];
  //   for(let i = 0; i < num; i++){
  //     let people = createRandomPerson();
  //     arr.push(customer);
  //   }
  //   return arr
  // }

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
