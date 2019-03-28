const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  return [
    {
      id: 1,
      user_name: 'test-user-1',
      password: 'password',
      favorite_city: 1,
      favorite_baseball: 1,
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 2,
      user_name: 'test-user-2',
      password: 'password',
      favorite_city: 3,
      favorite_baseball: 16,
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 3,
      user_name: 'test-user-3',
      password: 'password',
      favorite_city: 4,
      favorite_baseball: 21,
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 4,
      user_name: 'test-user-4',
      password: 'password',
      favorite_city: 27,
      favorite_city: 4,
      date_created: '2029-01-22T16:28:32.615Z',
    },
  ]
}

function makeShowdownsArray(users) {
  return [
    {
        user_pin: users[0].id,
        user_total_wins: 3,
        user_total_loses: 2,
        user_baseball_team: 5,
        opp_baseball_team: 12,
        wins_baseball: 3,
        losses_baseball: 2
    },
    {
        user_pin: users[1].id,
        user_total_wins: 10,
        user_total_loses: 3,
        user_baseball_team: 18,
        opp_baseball_team: 1,
        wins_baseball: 10,
        losses_baseball: 3
    },
    {
        user_pin: users[2].id,
        user_total_wins: 1,
        user_total_loses: 5,
        user_baseball_team: 3,
        opp_baseball_team: 5,
        wins_baseball: 1,
        losses_baseball: 5
    },
    {
        user_pin: users[0].id,
        user_total_wins: 8,
        user_total_loses: 4,
        user_baseball_team: 5,
        opp_baseball_team: 3,
        wins_baseball: 8,
        losses_baseball: 4
    },
    {
        user_pin: users[3].id,
        user_total_wins: 2,
        user_total_loses: 0,
        user_baseball_team: 17,
        opp_baseball_team: 12,
        wins_baseball: 2,
        losses_baseball: 0
    },
  ];
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
     const token = jwt.sign({ user_id: user.id }, secret, {
       subject: user.user_name,
       algorithm: 'HS256',
     })
     return `Bearer ${token}`
   }



function cleanTables(db) {
  return db.raw(
    `TRUNCATE
      cities_users,
      showdowns
      RESTART IDENTITY CASCADE`
  )
}

function seedUsers(db, users) {
     const preppedUsers = users.map(user => ({
       ...user,
       password: bcrypt.hashSync(user.password, 1)
     }))
     return db
       .into('cities_users')
       .insert(preppedUsers)
   }

function seedShowdownsTables(db, users, showdowns=[]) {
 return seedUsers(db, users)
    .then(() =>
      db
        .into('showdowns')
        .insert(showdowns)
    )
}


module.exports = {
  makeUsersArray,
  makeShowdownsArray,

  cleanTables,
  seedShowdownsTables,
  makeAuthHeader,
  seedUsers
}