import { createClient, groq } from "next-sanity";
import { config } from "./config/client-config";

interface Author {
  _id: string;
  name: string;
  slug: string;
  avatar: string;
}

export const getAuthors = async (): Promise<Author[]> => {
  return createClient(config).fetch(
    groq`*[_type == "author"]{
      _id,
      name,
      "slug": slug.current,
      "avatar": avatar.asset->url,
    }`
  );
};

export const getAuthor = async (slug: string): Promise<Author> => {
  return createClient(config).fetch(
    groq`*[_type == "author" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      "avatar": avatar.asset->url,
    }`,
    { slug }
  );
};
