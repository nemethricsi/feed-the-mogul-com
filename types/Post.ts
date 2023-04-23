import type { PortableTextBlock } from 'sanity';
import type { Person } from './Person';

export interface Post {
  _id: string;
  title: string;
  slug: string;
  author: Person;
  content: PortableTextBlock[];
}
