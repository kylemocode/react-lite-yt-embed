# React Lite Youtube Embed
React component version of [lite-youtube-embed]([https://](https://github.com/paulirish/lite-youtube-embed)), which focus on visual performance, rendering just like the real thing but much faster.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkylemocode%2FConsumerX.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkylemocode%2FConsumerX?ref=badge_shield)
[![Weekly Downloads](https://img.shields.io/npm/dw/consumer-x)](https://img.shields.io/npm/dw/consumer-x)

![](https://i.imgur.com/7QkCbgl.gif)

# Quick Start

## Install

[react-lite-yt-embed](https://www.npmjs.com/package/react-lite-yt-embed)
```shell
$ yarn add react-lite-yt-embed
```

or

```shell
$ npm install react-lite-yt-embed
```


## Overview
### Introduction
'react-lite-yt-embed' is a react component version of popular package [lite-youtube-embed]([https://](https://github.com/paulirish/lite-youtube-embed)), which can use in React project including server-side-rendering project. It renders just like the real iframe but way much faster.

## Basic Usage

```javascript
import LiteYoutubeEmbed from 'react-lite-yt-embed';

// In your react component
<>
  <LiteYoutubeEmbed id={id}> {/* ID of youtube video */}
  {/* You can add more props, see the description below. */}
</>
```

## Component Props

| props       | required | default value | Type                     | Description                                                                                   |
|-------------|----------|---------------|--------------------------|-----------------------------------------------------------------------------------------------|
| id          | true     | none          | `string`                 | The unique id of the youtube video                                                            |
| defaultPlay | false    | false         | `boolean`                | Set defaultPlay as  `true`  will directly show youtube iframe                                 |
| isPlaylist  | false    | false         | `boolean`                | If you want to play playlist, set this as `true` and pass the playlist id                     |
| noCookie    | false    | true          | `boolean`                | Use "https://www.youtube-nocookie.com" as path or "https://www.youtube.com"                   |
| mute        | false    | true          | `boolean`                | Set the video is mute or not.                                                                 |
| Params      | false    | {}            | `Object<string, string>` | Query string params (autoplay and mute are default query string, you do not have to set them) |


## Roadmap
  - [ ] Use react-testing-library to test whether component render correctly.
  - [ ] More features
  - [ ] Setup lint-stage
  - [ ] Add Prettier
  - [ ] CI/CD pipeline

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkylemocode%2FConsumerX.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkylemocode%2FConsumerX?ref=badge_large)