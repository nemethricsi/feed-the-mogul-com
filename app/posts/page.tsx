import { getPosts } from '@/sanity/sanity-utils';
import Link from 'next/link';

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ _id, title, slug }) => {
          return (
            <li key={_id}>
              <Link href={`/post/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
