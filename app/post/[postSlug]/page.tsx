'use client';

import { getPost } from '@/sanity/sanity-utils';
import { config } from '@/sanity/config/client-config';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Image from 'next/image';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface SinglePostProps {
  params: {
    postSlug: string;
  };
}

const builder = imageUrlBuilder(config);

const urlFor = (source: { _ref: string }) => {
  return builder.image(source);
};

export default async function SinglePost({ params }: SinglePostProps) {
  const slug = params.postSlug;
  const { title, content } = await getPost(slug);

  // console.log({ featuredImage });
  // console.log({ lqip });
  // console.log({ author });
  console.log({ title });

  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className="text-base lg:text-lg">{children}</p>;
      },
      h2: ({ children }) => {
        return (
          <h2 className="text-3xl font-semibold text-green-600">{children}</h2>
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value.href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      },
      strong: ({ children }) => {
        return <strong className="text-orange-800">{children}</strong>;
      },
    },
    types: {
      image: ({ value }) => {
        const url = urlFor(value.asset).width(1000).url();

        return <Image src={url} alt="asd" width={400} height={400} />;
      },
      embedYoutube: ({ value }) => {
        const id = getYouTubeId(value.url);

        if (!id) return null;

        return <LiteYouTubeEmbed id={id} title="YouTube Embed" webp />;
      },
    },
  };

  return (
    <main className="m-auto min-h-full max-w-4xl border p-3">
      <h1 className="text-2xl md:text-4xl">{title}</h1>
      <PortableText value={content} components={components} />
    </main>
  );
}
