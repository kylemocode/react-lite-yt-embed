import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LiteYoutubeEmbed } from '../dist';

const App = () => {
  return (
    <>
      <h2>React Lite Youtube Embed Example</h2>

      {/*Default is highest resolution thumbnail */}
      <p>Basic(maxresdefault)</p>
      <LiteYoutubeEmbed id="ZPBWje2kJ_U" />
      <br />
      {/*sddefault resolution (medium)*/}
      <p>sddefault</p>
      <LiteYoutubeEmbed id="ZPBWje2kJ_U" desktopResolution="sddefault" />
      <br />
      {/*hqdefault resolution (lowest)*/}
      <p>hqdefault</p>
      <LiteYoutubeEmbed id="ZPBWje2kJ_U" desktopResolution="hqdefault" />
      <br />
      {/*default play: will play the video immediately*/}
      <p>Default play</p>
      <LiteYoutubeEmbed id="ZPBWje2kJ_U" defaultPlay={true} />
      <br />
      <p>Give it an outer container</p>
      <div style={{ width: "200px", height: "100px" }}>
        <LiteYoutubeEmbed id="ZPBWje2kJ_U" />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
