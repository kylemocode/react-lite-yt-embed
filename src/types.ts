export interface ILiteYouTubeEmbedProps {
  id: string;
  adLinksPreconnect?: boolean;
  defaultPlay?: boolean; // set defaultPlay as `true` will directly show youtube iframe
  isPlaylist?: boolean;
  noCookie?: boolean;
  mute?: boolean;
  params?: Record<string, string>;
}
