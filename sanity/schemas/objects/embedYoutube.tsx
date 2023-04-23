import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import type { ObjectInputProps } from 'sanity';

interface PreviewProps extends ObjectInputProps {
  url: string;
}

const Preview = (props: PreviewProps) => {
  if (!props.url) {
    return <div>Missing YouTube URL</div>;
  }

  const id = getYouTubeId(props.url);
  if (!id) return null;

  return (
    <div>
      {props.renderDefault({ ...props })}
      <LiteYouTubeEmbed id={id} title="YouTube Embed" />
    </div>
  );
};

export const embedYoutube = {
  name: 'embedYoutube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: Preview,
  },
};
