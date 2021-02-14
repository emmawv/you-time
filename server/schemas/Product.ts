import { list } from '@keystone-next/keystone/schema';
import { integer, select, text } from '@keystone-next/fields';

export const Product = list({
  // access
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea', // Default is input
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        // Changes the way you view the section to create a new product. Not really important as we will do everything from the front.
        displayMode: 'segmented-control',
        // shows all options
        // display-mode: 'select' shows dropdown with options.
        createView: { fieldMode: 'edit' },
        // fieldMode: 'hidden' hides section in the create view to make the creating easier nad faster.
      },
    }),
    price: integer(), // Round number (everything in cents), 'float' has decimals.
    // TODO: Photo
  },
});