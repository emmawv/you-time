import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';

// Cloudinary Config (gets passed into ProductImage as cloudinary)
export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'UTime',
};

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    product: relationship({ ref: 'Product.photo' }), // We are going to reference it to the photo property of Product.
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'product'], // Initial info I want to show up, if not specified only id is shown.
    },
  },
});
