import { UsersIcon } from '@sanity/icons';

export const person = {
  name: 'person',
  title: 'Persons',
  type: 'document',
  icon: UsersIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL identifier',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
      ],
    },
  ],
};
