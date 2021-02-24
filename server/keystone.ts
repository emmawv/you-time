import 'dotenv/config'; // Makes variables in .env file available to us.

import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';

import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage'
import { insertSeedData } from './seed-data';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-you-time'; // Falls back to localhost in case tou don't have a DBURL running.

const sessionConfig = {
  // Authenticate users in the frontend to login to keystone backend.
  maxAge: 60 * 60 * 24 * 360, // How long the user stays signed in. Whatever value you want.
  secret: process.env.COOKIE_SECRET, // For generating the cookie.
};

const { withAuth } = createAuth ({
  listKey: 'User', // Which schema is going to be responsible for being the user.
  identityField: 'email', //Which property of the user is used to identify them (what they log in with).
  secretField: 'password',
  initFirstItem: { // Auth when there are no users yet, will create initial user.
    fields: ['name', 'email', 'password'],
    // TODO: Add in initial roles.
  }
});

export default withAuth( config({
  // Keystone config.
  server: {
    cors: {
      origin: [process.env.DOMAIN_LOCAL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Add data seeding here.
    async onConnect(keystone) {
      console.log('⚡️ Connected to the database!')
      // We only want the seed to happen if someone passes an arguent to keystone when they run it, not every time.
      if(process.argv.includes('--seed-data')) await insertSeedData(keystone);
    },
  },
  lists: createSchema({
    // Schema items go in here
    User, // User: User => If property name and variable you're setting it to are the same you can ommit the name.
    Product,
    ProductImage,
  }),
  ui: {
    // Do you want people to be able to access the keystone UI? Generally you want people to manage all the data from the frontend of the application.
    isAccessAllowed: ({ session }) => {
      return !!session?.data;
      // If there is a session and session.data (they are logged in) it will allow access. Inside this you can set up any logic.
    },
    // isAccessAllowed: () => true, allows everyone to access
  },
  session: withItemData(statelessSessions(sessionConfig), {
    User: 'id' // Passes the id and any other data we query along with every session. GraphQL query.
  })
}));
