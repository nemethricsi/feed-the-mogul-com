import { getPerson } from '@/sanity/sanity-utils';

interface AuthorProps {
  params: {
    authorSlug: string;
  };
}

export default async function Author({ params }: AuthorProps) {
  const slug = params.authorSlug;
  const author = await getPerson(slug);

  return <h1>{author.name}</h1>;
}
