import { list } from '@keystone-next/keystone/schema';
import { text, password /* relationship */ } from '@keystone-next/fields';

// Named export instead of eport default makes imports work a little bit nicer.
export const User = list({
  // access:
  // ui:
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // TODO: add roles, cart and orders
  },
});
