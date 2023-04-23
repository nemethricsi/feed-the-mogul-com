import { DocumentTextIcon, ImageIcon } from '@sanity/icons';
import { SlSocialYoutube } from 'react-icons/sl';

export const post = {
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxlength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'person' }],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Heading', value: 'h2' },
            { title: 'Normal', value: 'normal' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Strike', value: 'strike-through' },
            ],
          },
        },
        { type: 'image', icon: ImageIcon },
        { type: 'embedYoutube', icon: SlSocialYoutube },
      ],
    },
  ],
};
