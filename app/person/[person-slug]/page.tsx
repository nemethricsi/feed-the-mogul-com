'use client';

import Link from 'next/link';
import { getSomething } from '@/sanity/sanity-utils';

export default async function SinglePerson() {
  const { title } = await getSomething('feed-the-mogul');

  return (
    <div className="grid min-h-full place-content-center">
      <h1>Single Person Page</h1>
      <p>{title}</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}
