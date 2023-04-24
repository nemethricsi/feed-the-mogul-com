import type { PortableTextBlock } from 'sanity';
import type { Person } from './Person';
import type { Image as ImageProps } from 'sanity';

export interface Post {
  _id: string;
  title: string;
  slug: string;
  author: Person;
  content: PortableTextBlock[];
  // featuredImage: ImageProps['asset'];
  // lqip: string;
}
