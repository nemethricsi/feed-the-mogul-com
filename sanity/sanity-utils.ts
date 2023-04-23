import { createClient, groq } from 'next-sanity';
import { config } from './config/client-config';
import type { Person } from '@/types/Person';
import type { Post } from '@/types/Post';

export const getPosts = async (): Promise<Post[]> => {
  return createClient(config).fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
    }`,
  );
};
export const getPost = async (slug: string): Promise<Post> => {
  return createClient(config).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      content,
    }`,
    { slug },
  );
};

export const getPersons = async (): Promise<Person[]> => {
  return createClient(config).fetch(
    groq`*[_type == "person"]{
      _id,
      name,
      "slug": slug.current,
      "avatar": avatar.asset->url,
      "lqip": avatar.asset->metadata.lqip
    }`,
  );
};

export const getPerson = async (slug: string): Promise<Person> => {
  return createClient(config).fetch(
    groq`*[_type == "person" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      "avatar": avatar.asset->url,
      "lqip": avatar.asset->metadata.lqip
    }`,
    { slug },
  );
};
