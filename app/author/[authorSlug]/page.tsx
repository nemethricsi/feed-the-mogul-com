import { getAuthor } from "@/sanity/sanity-utils";

interface AuthorProps {
  params: {
    authorSlug: string;
  };
}

export default async function Author({ params }: AuthorProps) {
  const slug = params.authorSlug;
  const author = await getAuthor(slug);

  return <h1>{author.name}</h1>;
}
