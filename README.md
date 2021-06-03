# React Lite YouTube Embed
React component version of [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed) scaffolded with tsdx, which focus on visual performance, rendering just like the real thing but much faster.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkylemocode%2Freact-lite-yt-embed.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkylemocode%2Freact-lite-yt-embed?ref=badge_shield)
![Download](https://img.shields.io/npm/dt/react-lite-yt-embed)

![](https://i.imgur.com/7QkCbgl.gif)

# Quick Start

## Install
Please use version at least above @1.2.1, version below that is experimental and therefore may cause some runtime error.

[react-lite-yt-embed](https://www.npmjs.com/package/react-lite-yt-embed)
```shell
$ yarn add react-lite-yt-embed
```

or

```shell
$ npm install react-lite-yt-embed
```

### Sandbox Example
[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/blissful-fog-d02pi?file=/src/App.js)

## Overview

### Features 🎉
- Preconnect YouTube domain while mouseover
- Preload thumbnail image to improve user experience
- WebP support, and fallback to jpg if the browser not support it
- Provides many props which can customize frame behaviors
- Lazy load support
- Render fast, improve your web's performance

### Introduction
'react-lite-yt-embed' is a react component version of popular package [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed), which can use in React project including SSR and CSR project. It renders just like the real iframe but way much faster.

### Why is it faster than normal iframe ?
- Preload the YouTube thumbnail image when page loaded. [Make image load faster]
- Preconnect YouTube domain when mouse hover on the component. [Save 3 round-trip-time (DNS lookup + TCP handshake + SSL negotiation) before user click play button, making iframe load faster]

### WebP Support (support after version @1.2.4)
'react-lite-yt-embed' support WebP image format, which is generally 25% - 35% smaller than jpg image, so the network request time will also decrease, making your web app render even faster.

If you use some browsers that not totally support WebP, for example, Safari, 'react-lite-yt-embed' will fallback the image to jpg automatically.

You can see WebP browser support [here](https://caniuse.com/?search=webp).

## Basic Usage

```javascript
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';

// In your react component
<>
  <LiteYoutubeEmbed id={id}> {/* ID of YouTube video */}
  {/* You can add more props, see the description below. */}
  {/* You can also give the iframe an outer container */}
</>
```

## Component Props

| props             | required | default value   | Type                                          | Description                                                                                                                        |
|-------------------|----------|-----------------|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| id                | true     | none            | `string`                                      | The unique id of the youtube video                                                                                                 |
| defaultPlay       | false    | false           | `boolean`                                     | Set defaultPlay as  `true`  will directly show youtube iframe                                                                      |
| isPlaylist        | false    | false           | `boolean`                                     | If you want to play playlist, set this as `true` and pass the playlist id                                                          |
| noCookie          | false    | true            | `boolean`                                     | Use "https://www.youtube-nocookie.com" as path or "https://www.youtube.com"                                                        |
| mute              | false    | true            | `boolean`                                     | Set the video is mute or not.                                                                                                      |
| params            | false    | {}              | `Object<string, string>`                      | Query string params (autoplay and mute are default query string, you do not have to set them), the value have to be a string type. |
| isMobile          | false    | false           | `boolean`                                     | Use in mobile device or not.                                                                                                       |
| mobileResolution  | false    | 'hqdefault'     | 'hqdefault' \| 'sddefault' \| 'maxresdefault' | You can specify the resolution of the thumbnail image on the phone (default is hqdefault, which is a lower resolution).            |
| desktopResolution | false    | 'maxresdefault' | 'hqdefault' \| 'sddefault' \| 'maxresdefault' | You can specify the resolution of the thumbnail image on the desktop (default is maxresdefault, which is the highest resolution).  |
| lazyImage         | false    | false           | `boolean`                                     | If true, set the img loading attribute to 'lazy', default is undefined. |
| imageAltText      | false    | "YouTube's thumbnail for this video."  | `string`               | You can specify an alternative text description for the thumbnail image for accessibility purposes.            |
| iframeTitle       | false    | "YouTube video."  | `string`                                     | You can specify a title for the iframe containing the video for accessibility purposes. |

## Run on local development environment
  - Clone the repo
  - npm install | yarn install
  - Make your change or contribution
  - npm run build (in root folder)
  - cd in example folder & run npm install
  - npm run build (in example folder)
  - npm run start (in example folder)
  - visit localhost:1234 in the browser

## Roadmap (Welcome contribution)
  - [ ] Testing
  - [X] CI/CD pipeline

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkylemocode%2Freact-lite-yt-embed.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkylemocode%2Freact-lite-yt-embed?ref=badge_large)
