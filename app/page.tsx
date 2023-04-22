import Image from 'next/image';
import Link from 'next/link';
import { getAuthors } from '@/sanity/sanity-utils';

export default async function Home() {
  const authors = await getAuthors();

  return (
    <main>
      <h1>Hello</h1>
      <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {authors.map(({ _id, name, avatar, slug, lqip }) => {
          return (
            <Link href={`/author/${slug}`} key={_id}>
              {avatar && (
                <div className="h-48 w-48">
                  <Image
                    src={avatar}
                    alt="image"
                    width={750}
                    height={100}
                    className="rounded-lg border border-gray-500 object-cover"
                    placeholder="blur"
                    blurDataURL={lqip}
                  />
                </div>
              )}
              <p>{name}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
