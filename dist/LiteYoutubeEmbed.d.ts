import React from 'react';
declare type ResolutionType = 'maxresdefault' | 'sddefault' | 'hqdefault';
interface ILiteYouTubeEmbedProps {
    id: string;
    adLinksPreconnect?: boolean;
    defaultPlay?: boolean;
    isPlaylist?: boolean;
    noCookie?: boolean;
    mute?: boolean;
    params?: Record<string, string>;
    isMobile?: boolean;
    mobileResolution?: ResolutionType;
    desktopResolution?: ResolutionType;
    lazyImage?: boolean;
    iframeTitle?: string;
    imageAltText?: string;
}
declare const LiteYoutubeEmbed: ({ id, params, defaultPlay, adLinksPreconnect, isPlaylist, noCookie, mute, isMobile, mobileResolution, desktopResolution, lazyImage, iframeTitle, imageAltText, }: ILiteYouTubeEmbedProps) => React.ReactElement;
export default LiteYoutubeEmbed;
