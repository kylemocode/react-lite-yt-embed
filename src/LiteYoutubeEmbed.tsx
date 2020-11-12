import React, { useState } from 'react';

import styles from './styles.module.css';

const qs = (params: Record<string, string>) => {
  return Object.keys(params)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  .join('&');
}

interface ILiteYouTubeEmbedProps {
  id: string;
  adLinksPreconnect?: boolean;
  defaultPlay?: boolean; // set defaultPlay as `true` will directly show youtube iframe
  isPlaylist?: boolean;
  noCookie?: boolean;
  mute?: boolean;
  params?: Record<string, string>;
}

const LiteYoutubeEmbed = ({
  id,
  params = {},
  defaultPlay = false,
  adLinksPreconnect = true,
  isPlaylist = false,
  noCookie = true,
  mute = true,
}: ILiteYouTubeEmbedProps): React.ReactElement => {
  const [isPreconnected, setIsPreconnected] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(defaultPlay);

  const muteParam = mute || defaultPlay ? '1' : '0'; // Default play must be mute
  const queryString = qs({ autoplay: '1', mute: muteParam, ...params });
  const posterUrl = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; // * Lo, the youtube placeholder image!  (aka the thumbnail, poster image, etc)
  const ytUrl = noCookie ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
  const iframeSrc = isPlaylist ? `${ytUrl}/embed/videoseries?list=${id}` : `${ytUrl}/embed/${id}?${queryString}`;

  const warmConnections = () => {
    if (isPreconnected) return;
    setIsPreconnected(true);
  };

  const loadIframeFunc = () => {
    if (iframeLoaded) return;
    setIframeLoaded(true);
  };

  return (
    <>
      {/* Link is "body-ok" element. Reference: https://html.spec.whatwg.org/multipage/links.html#body-ok */}
      <link rel='preload' href={posterUrl} as='image' />
        {isPreconnected && (
          <>
            {/* The iframe document and most of its subresources come right off youtube.com */}
            <link rel='preconnect' href={ytUrl} />
            {/* The botguard script is fetched off from google.com */}
            <link rel='preconnect' href='https://www.google.com' />
          </>
        )}
        {isPreconnected && adLinksPreconnect && (
          <>
            {/* Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling. */}
            <link rel='preconnect' href='https://static.doubleclick.net' />
            <link rel='preconnect' href='https://googleads.g.doubleclick.net' />
          </>
        )}
      <div
        onClick={loadIframeFunc} 
        onPointerOver={warmConnections}
        className={`${styles['yt-lite']} ${iframeLoaded && styles['lyt-activated']}`}
        style={{ backgroundImage: `url(${posterUrl})`}}
      >
        <div className={`${styles['lty-playbtn']}`}></div>
        {iframeLoaded && (
          <iframe
            width='560'
            height='315'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            src={iframeSrc}
          ></iframe>
        )}
      </div>
    </>
  );
};

export default LiteYoutubeEmbed;
