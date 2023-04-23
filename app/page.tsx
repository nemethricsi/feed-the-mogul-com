import Image from 'next/image';
import Link from 'next/link';
import { getPersons, getPosts } from '@/sanity/sanity-utils';

export default async function Home() {
  // const persons = await getPersons();
  const posts = await getPosts();

  return (
    <main>
      <h1>Hello</h1>
      <div>
        {posts.map(({ _id, title, slug }) => {
          return (
            <Link key={_id} href={`/post/${slug}`}>
              <h2>{title}</h2>
            </Link>
          );
        })}
      </div>
      {/* <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {persons.map(({ _id, name, avatar, slug, lqip }) => {
          return (
            <Link href={`/author/${slug}`} key={_id}>
              {avatar && (
                <div className="h-48 w-48 border border-pink-600">
                  <Image
                    src={avatar}
                    alt="image"
                    width={800}
                    height={800}
                    className="rounded-full object-cover"
                    placeholder="blur"
                    blurDataURL={lqip}
                  />
                </div>
              )}
              <p>{name}</p>
            </Link>
          );
        })}
      </div> */}
    </main>
  );
}
