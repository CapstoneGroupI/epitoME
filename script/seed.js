'use strict'

const {db, models: {User, Post, Comment, Follower, Message} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ 
      username: 'Cody',
     password: '123',
      email: "cody@gmail.com",
       firstName: "Cody",
        lastName: "Cody",
         pronouns: "he/him",
          city: "New York",
           state: "NY",
           isAdmin: false,
            }),
    User.create({ 
      username: 'Murphy',
     password: '123',
     email: "Murphy@gmail.com",
      firstName: "Murphy",
       lastName: "Murphy",
        pronouns: "he/him",
         city: "New York",
          state: "NY",
          isAdmin: false
         }),
    User.create({ 
    username: 'cupofjoey',
    password: '321',
    email: "sightower@gmail.com",
    firstName: "Sarah",
      lastName: "Hightower",
      pronouns: "she/her",
        city: "Bakersfield",
        state: "CA",
        isAdmin: true
        }),
  ])

  const post = await Promise.all([
    Post.create({ 
      text: 'I love posting',
      n_likes: 3,
      n_comments: 2
         }),
  ])
    


  // const createUserDatabase = (num) => {
  //   const arr = [];
  //   for(let i = 0; i < num; i++){
  //     let people = createRandomPerson();
  //     arr.push(customer);
  //   }
  //   return arr
  // }

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
