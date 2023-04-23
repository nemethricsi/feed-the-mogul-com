'use client';

import { getPost } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

interface SinglePostProps {
  params: {
    postSlug: string;
  };
}

export default async function SinglePost({ params }: SinglePostProps) {
  const slug = params.postSlug;
  const { title, content } = await getPost(slug);

  const components: PortableTextComponents = {
    block: {
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
      image: ({ isInline, value, index, renderNode }) => {
        console.log({ isInline });
        console.log({ value });
        console.log({ index });
        console.log({ renderNode });
        return <p>&lt;IMAGE_PLACEHOLDER&gt;</p>;
      },
      embedYoutube: ({ value }) => {
        console.log('youtube value', value);
        const id = getYouTubeId(value.url);

        if (!id) return null;

        return <YouTube videoId={id} className="aspect-video w-full" />;
      },
    },
  };

  return (
    <>
      <h1 className="text-2xl md:text-4xl">{title}</h1>
      <a
        href="https://www.feedthemogul.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ez itt egy link kivul a portable text-en.
      </a>
      <div id="portable-text">
        <PortableText value={content} components={components} />
      </div>
    </>
  );
}
