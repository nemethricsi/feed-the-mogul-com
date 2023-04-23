import { getPost } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';

interface SinglePostProps {
  params: {
    postSlug: string;
  };
}

export default async function SinglePost({ params }: SinglePostProps) {
  const slug = params.postSlug;
  const { title, content } = await getPost(slug);

  const components: PortableTextComponents = {
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            href={value.href}
            className="text-blue-500 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <>
      <h1 className="text-2xl md:text-4xl">{title}</h1>
      <a href="https://www.feedthemogul.com">
        Ez itt egy link kivul a portable text-en.
      </a>
      <div id="portable-text">
        <PortableText value={content} components={components} />
      </div>
    </>
  );
}
