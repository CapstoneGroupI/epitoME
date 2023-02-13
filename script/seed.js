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
      id: 1,
      username: "Cody",
      password: "123",
      email: "cody@gmail.com",
      firstName: "Cody",
      lastName: "Adams",
      pronouns: "he/him",
      city: "New York",
      state: "NY",
      isAdmin: false,
      rating: 5.0,
    }),
    User.create({
      id: 2,
      username: "bettercody",
      password: "123",
      email: "bettercody@gmail.com",
      firstName: "Cody",
      lastName: "Smith",
      pronouns: "he/him",
      city: "New York",
      state: "NY",
      isAdmin: false,
      rating: 5.0,
    }),
    User.create({
      id: 3,
      username: "Murphy",
      password: "123",
      email: "Murphy@gmail.com",
      firstName: "Murphy",
      lastName: "Wells",
      pronouns: "he/him",
      city: "New York",
      state: "NY",
      isAdmin: false,
      rating: 5.0,
    }),
    User.create({
      id: 4,
      username: "cupofjoey",
      password: "321",
      email: "sightower@gmail.com",
      birthday: "11-15-1999",
      profilePic: "https://www.linkpicture.com/q/IMG_3839.jpg",
      firstName: "Sarah",
      lastName: "Hightower",
      pronouns: "she/her",
      city: "Bakersfield",
      state: "CA",
      isAdmin: true,
      rating: 5.0,
    }),
    //   User.create({
    //     username: "tomhanks",
    //     password: "123",
    //     email: "tomHanks@gmail.com",
    //     firstName: "Tom",
    //     lastName: "Hanks",
    //     pronouns: "he/him",
    //     city: "Hollywood",
    //     state: "CA",
    //     isAdmin: false,
    //     profilePic:
    //       "https://www.denofgeek.com/wp-content/uploads/2022/05/Tom-Hanks-as-Forrest-Gump.jpeg?fit=1200%2C714",
    //       rating: 5.0,
    //   }),
    //   User.create({
    //     username: "barack.obama",
    //     password: "123",
    //     email: "barack.obama@gmail.com",
    //     firstName: "Barack",
    //     lastName: "Obama",
    //     pronouns: "he/him",
    //     city: "Washington DC",
    //     state: "VA",
    //     isAdmin: false,
    //     profilePic:
    //       "https://brenebrown.com/wp-content/uploads/2021/10/DTL_PresidentBarackObama_Arapawa_Dark.jpg",
    //       rating: 5.0,
    //       fellows: [1]
    //   }),
    //   User.create({
    //     username: "selenagomez",
    //     password: "123",
    //     email: "selenagomez@gmail.com",
    //     firstName: "Selena",
    //     lastName: "Gomez",
    //     pronouns: "she/her",
    //     city: "Hollywood",
    //     state: "CA",
    //     isAdmin: false,
    //     profilePic: "https://1159025897.rsc.cdn77.org/data/images/full/83167/selena-gomez.jpg",
    //       rating: 5.0,
    //   }),
    //   User.create({
    //     username: "dwyaneWade",
    //     password: "123",
    //     email: "dwyaneWade@gmail.com",
    //     firstName: "Dwyane",
    //     lastName: "Wade",
    //     pronouns: "he/him",
    //     city: "Miami",
    //     state: "FL",
    //     isAdmin: false,
    //     profilePic: "https://cdn.nba.com/headshots/nba/latest/1040x760/2548.png",
    //     rating: 5.0,
    //   }),
    //   User.create({
    //     username: "madonna",
    //     password: "123",
    //     email: "madonna@gmail.com",
    //     firstName: "Madonna",
    //     lastName: "Madonna",
    //     pronouns: "she/her",
    //     city: "Bay City",
    //     state: "MI",
    //     isAdmin: false,
    //     profilePic:
    //       "https://resizing.flixster.com/N2cuekNI5Fxb85yQcbKxt0VjjJk=/218x280/v2/https://flxt.tmsimg.com/assets/69735_v9_bb.jpg",
    //       rating: 5.0,
    //   }),
    //   User.create({
    //     username: "scarjo",
    //     password: "123",
    //     email: "scarjo@gmail.com",
    //     firstName: "Scarlett",
    //     lastName: "Johannsen",
    //     pronouns: "she/her",
    //     city: "New York City",
    //     state: "NY",
    //     isAdmin: false,
    //     profilePic:
    //       "https://media.glamour.com/photos/61b35f5a1aa98c846d8ee540/master/w_2560%2Cc_limit/GettyImages-1205142069.jpg",
    //   }),
    //   User.create({
    //     username: "peytonManning",
    //     password: "123",
    //     email: "peytonManning@gmail.com",
    //     firstName: "Peyton",
    //     lastName: "Manning",
    //     pronouns: "he/him",
    //     city: "Indianapolis",
    //     state: "IN",
    //     isAdmin: false,
    //     profilePic:
    //       "https://cbs4indy.com/wp-content/uploads/sites/22/2021/02/GettyImages-93078553-e1626727052404.jpg?w=1280",
    //   }),
    //   User.create({
    //     username: "DaveChappelle",
    //     password: "123",
    //     email: "DaveChappelle@gmail.com",
    //     firstName: "Dave",
    //     lastName: "Chappelle",
    //     pronouns: "he/him",
    //     city: "Washington DC",
    //     state: "VA",
    //     isAdmin: false,
    //     profilePic:
    //       "https://s1.ticketm.net/dam/a/802/4c54bbf8-b7a8-412b-876e-aab2bb3d3802_1561351_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    //   }),
    //   User.create({
    //     username: "CaliforniaGurl",
    //     password: "123",
    //     email: "KatyPerry@gmail.com",
    //     firstName: "Katy",
    //     lastName: "Perry",
    //     pronouns: "she/her",
    //     city: "Santa Barbara",
    //     state: "CA",
    //     isAdmin: false,
    //     profilePic:
    //       "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_22/1725706/katy-perry-kb-main-210601.jpg",
    //   }),
    //   User.create({
    //     username: "Beyonce",
    //     password: "123",
    //     email: "Beyonce@gmail.com",
    //     firstName: "Beyonce",
    //     lastName: "Knowles",
    //     pronouns: "she/her",
    //     city: "Houston",
    //     state: "TX",
    //     isAdmin: false,
    //     profilePic:
    //       "https://cdn.britannica.com/51/188751-050-D4E1CFBC/Beyonce-2010.jpg",
    //   }),
    //   User.create({
    //     username: "MorganFreeman",
    //     password: "123",
    //     email: "MorganFreeman@gmail.com",
    //     firstName: "Morgan",
    //     lastName: "Freeman",
    //     pronouns: "he/him",
    //     city: "Memphis",
    //     state: "TN",
    //     isAdmin: false,
    //     profilePic:
    //       "https://www.themoviedb.org/t/p/w500/jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
    //   }),
    //   User.create({
    //     username: "NataliePortman",
    //     password: "123",
    //     email: "NataliePortman@gmail.com",
    //     firstName: "Natalie",
    //     lastName: "Portman",
    //     pronouns: "she/her",
    //     city: "Hollyood",
    //     state: "CA",
    //     isAdmin: false,
    //     profilePic:
    //       "https://images.mubicdn.net/images/cast_member/3138/cache-488404-1615052280/image-w856.jpg",
    //   }),
    //   User.create({
    //     username: "ElCapitan",
    //     password: "123",
    //     email: "DerekJeter@gmail.com",
    //     firstName: "Derek",
    //     lastName: "Jeter",
    //     pronouns: "he/him",
    //     city: "Bronx",
    //     state: "NY",
    //     isAdmin: false,
    //     profilePic:
    //       "https://people.com/thmb/1qoHZ1bGQkAyI6Wiz67dcAI1sWk=/400x262/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/derek-jeter-0c756fef46934a69ada11240c5513f46.jpg",
    //   }),
    //   User.create({
    //     username: "DonaldMAGA",
    //     password: "123",
    //     email: "DonaldTrump@gmail.com",
    //     firstName: "Donald",
    //     lastName: "Trump",
    //     pronouns: "he/him",
    //     city: "New York City",
    //     state: "NY",
    //     isAdmin: false,
    //     profilePic: "https://pbs.twimg.com/media/Erao8GsVEAIB3ZJ.jpg",
    //   }),
    //   User.create({
    //     username: "FloydMayweather",
    //     password: "123",
    //     email: "FloydMayweather@gmail.com",
    //     firstName: "Floyd",
    //     lastName: "Mayweather",
    //     pronouns: "he/him",
    //     city: "Grand Rapids",
    //     state: "MI",
    //     isAdmin: false,
    //     profilePic:
    //       "https://img.olympicchannel.com/images/image/private/f_auto/t_1-1_300/primary/xzikbu9gm4ferp7j4ann",
    //   }),
    //   User.create({
    //     username: "SerenaWilliams",
    //     password: "123",
    //     email: "SerenaWilliams@gmail.com",
    //     firstName: "Serena",
    //     lastName: "Williams",
    //     pronouns: "she/her",
    //     city: "Saginaw",
    //     state: "MI",
    //     isAdmin: false,
    //     profilePic:
    //       "https://ca-times.brightspotcdn.com/dims4/default/ef756cf/2147483647/strip/true/crop/1728x1152+160+0/resize/2000x1333!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F43%2F98%2Fd1cf186ffdf2fe215346bba89750%2Fla-1467409250-snap-photo",
    //   }),
    //   User.create({
    //     username: "Yeezy",
    //     password: "123",
    //     email: "KanyeWest@gmail.com",
    //     firstName: "Kanye",
    //     lastName: "West",
    //     pronouns: "he/him",
    //     city: "Atlanta",
    //     state: "GA",
    //     isAdmin: false,
    //     profilePic:
    //       "https://pagesix.com/wp-content/uploads/sites/3/2021/10/kanye-name-change.jpg?quality=75&strip=all&w=618&h=410&crop=1",
    //   }),
    //   User.create({
    //     username: "TeslaRules",
    //     password: "123",
    //     email: "elonMusk@gmail.com",
    //     firstName: "Elon",
    //     lastName: "Musk",
    //     pronouns: "he/him",
    //     city: "Hawthorne",
    //     state: "CA",
    //     isAdmin: false,
    //     profilePic:
    //       "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1240408699_524643_a4gklo.jpg",
    //   }),
    //   User.create({
    //     username: "MicrosoftRules",
    //     password: "123",
    //     email: "BillGates@gmail.com",
    //     firstName: "Bill",
    //     lastName: "Gates",
    //     pronouns: "he/him",
    //     city: "Seattle",
    //     state: "WA",
    //     isAdmin: false,
    //     profilePic:
    //       "https://upload.wikimedia.org/wikipedia/commons/1/19/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29_%28cropped%29.jpg",
    //   }),
  ]);

  const post = await Promise.all([
    Post.create({
      text: "I love posting",
      image:
        "https://www.livinginhawaii.com/wp-content/uploads/2019/01/ftp7/18509322244_ddf6e3213b_o.jpg",
      userId: 4,
    }),
    Post.create({
      text: "Hawaii is cool",
      userId: 3,
    }),
    Post.create({
      text: "My dog loves peanutbutter",
      image:
        "https://www.livinginhawaii.com/wp-content/uploads/2019/01/ftp7/18509322244_ddf6e3213b_o.jpg",
      userId: 2,
    }),
    Post.create({
      text: "Loving life",
      userId: 3,
    }),
    Post.create({
      text: "Lets go on vacation",
      userId: 1,
    }),
    Post.create({
      text: "Happy birthday to me!",
      image:
        "https://images.pond5.com/number-23-top-cake-twenty-footage-085133301_prevstill.jpeg",
      userId: 4,
    }),
    Post.create({
      text: "It's pretty cold today",
      image:
        "https://dottech.org/wp-content/uploads/2012/09/frozen_cars_in_romania.jpg",
      userId: 2,
    }),
    Post.create({
      text: "It's pretty hot today",
      image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2019-03/19/17/asset/buzzfeed-prod-web-06/sub-buzz-19452-1553031822-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
      userId: 1,
    }),
    Post.create({
      text: "Masterpiece!",
      image:
        "https://marigoldcoloradosprings.com/wp-content/uploads/2020/05/Creme-Brulee.png",
      userId: 2,
    }),
    Post.create({
      text: "Dieting sucks =(",
      image:
        "https://images.squarespace-cdn.com/content/v1/58af2ca246c3c4b688c26034/1534380269861-ROYNSTIV5LWND9JUZUSN/IMG_0121.JPG",
      userId: 3,
    }),
    Post.create({
      text: "My new doggo!!",
      image:
        "https://a-z-animals.com/media/2022/07/Meet-Top-9-Prettiest-Cutest-Dog-Breeds-Poster-Image.jpg",
      userId: 4,
    }),
    Post.create({
      text: "Ran 10 miles today!",
      image:
        "https://preview.redd.it/d3ncf133hrx41.jpg?auto=webp&s=2ce8300bd80f8b169ecf85945a80c3e5552c820e",
      userId: 4,
    }),
    Post.create({
      text: "Meet Garfield",
      image:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F07%2F20%2Forange-cats-1070960066-1-2000.jpg",
      userId: 1,
    }),
    Post.create({
      text: "R.I.P",
      image:
        "https://cdn.mos.cms.futurecdn.net/Xk63uudefpEpXrxZN3csEf.jpg",
      userId: 3,
    }),
    Post.create({
      text: "I found a wierd fruit in my garden, should I cook it and eat it?",
      image:
        "https://s.hdnux.com/photos/60/23/30/12662288/4/rawImage.jpg",
      userId: 2,
    }),
    Post.create({
      text: "Bro I think I'm being watched...",
      image:
        "https://c8.alamy.com/zooms/9/f8dfd7f35a98496f8dcb0632b408009f/w6rf3g.jpg",
      userId: 2,
    }),
    Post.create({
      text: "'Here comes the sun' - George Harrison",
      image:
        "https://www.lovethispic.com/uploaded_images/178715-Beautiful-Sunset.jpg",
      userId: 4,
    }),
    Post.create({
      text: "Go Chiefs Go!",
      image:
        "https://www.si.com/.image/c_limit%2Ccs_srgb%2Ch_1200%2Cq_auto:good%2Cw_1200/MTk1ODU2NzU1NDU5NDk5NDg5/chiefs-super-bowl.png",
      userId: 4,
    }),
    Post.create({
      text: "Visiting Montgomery, AL!",
      image:
        "https://thumbs.dreamstime.com/b/city-montgomery-sign-near-court-square-fountain-alabama-usa-june-historic-marker-next-to-downtown-188835714.jpg",
      userId: 1,
    }),
    Post.create({
      text: "Visiting the aquarium Chatanooga, TN!",
      image:
        "https://assets.simpleviewinc.com/simpleview/image/upload/crm/chattanooga/TNAq_Buildings_FB77E716-94C2-42ED-B2809B3E86F9FA33_5a8da4c2-055f-477a-bfaf7c796c3bfbfd.jpg",
      userId: 2,
    }),
    Post.create({
      text: "Kern County Museum in Bakersfield!",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/55/2b/0d/kern-county-museum.jpg",
      userId: 3,
    }),
    Post.create({
      text: "NYC BAYBEEE",
      image:
        "https://www.welcome-to-times-square.com/wp-content/uploads/2022/03/istockphoto-523513953-612x612-1.jpg",
      userId: 4,
    }),
  ]);

  const comment = await Promise.all([
    Comment.create({
      text: "this is such a good post",
      postId: 1,
      userId: 1,
    }),
    Comment.create({
      text: "I love crossiants",
      postId: 1,
      userId: 2,
    }),
    Comment.create({
      text: "great job",
      postId: 2,
      userId: 3,
    }),
  ]);

  const message = await Promise.all([
    Message.create({
      text: "How are you",
      userId: 1,
    }),
    Message.create({
      text: "Whats up",
      userId: 2,
    }),
    Message.create({
      text: "Hey",
      userId: 3,
    }),
    Message.create({
      text: "What's up?",
      userId: 4,
    }),
    Message.create({
      text: "You free tomorrow?",
      userId: 3,
    }),
    Message.create({
      text: "Yeah",
      userId: 4,
    }),
    Message.create({
      text: "Wanna go grab dinner",
      userId: 3,
    }),
    Message.create({
      text: "No",
      userId: 4,
    }),
    Message.create({
      text: "=(",
      userId: 3,
    }),
  ]);

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
