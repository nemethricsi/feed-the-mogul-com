import { getPost } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

interface SinglePostProps {
  params: {
    postSlug: string;
  };
}

export default async function SinglePost({ params }: SinglePostProps) {
  const slug = params.postSlug;
  const { title, content } = await getPost(slug);

  return (
    <>
      <h1>{title}</h1>
      <PortableText value={content} />
    </>
  );
}
