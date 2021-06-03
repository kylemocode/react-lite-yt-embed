import React, { useMemo, useState, useRef, useCallback, useEffect } from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".styles-module_yt-lite__1-uDa {\n  background-color: #000;\n  position: relative;\n  display: block;\n  contain: content;\n  background-position: center center;\n  background-size: cover;\n  cursor: pointer;\n}\n\n/* gradient */\n.styles-module_yt-lite__1-uDa::before {\n   content: '';\n   display: block;\n   position: absolute;\n   top: 0;\n   background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);\n   background-position: top;\n   background-repeat: repeat-x;\n   height: 60px;\n   padding-bottom: 50px;\n   width: 100%;\n   transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);\n}\n\n/* responsive iframe with a 16:9 aspect ratio\n  thanks https://css-tricks.com/responsive-iframes/\n*/\n.styles-module_yt-lite__1-uDa::after {\n  content: \"\";\n  display: block;\n  padding-bottom: calc(100% / (16 / 9));\n}\n.styles-module_yt-lite__1-uDa > iframe {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* play button */\n.styles-module_yt-lite__1-uDa > .styles-module_lty-playbtn__1pxDJ {\n  width: 70px;\n  height: 46px;\n  background-color: #212121;\n  z-index: 1;\n  opacity: 0.8;\n  border-radius: 14%; /* TODO: Consider replacing this with YT's actual svg. Eh. */\n  transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);\n}\n.styles-module_yt-lite__1-uDa:hover > .styles-module_lty-playbtn__1pxDJ {\n  background-color: #f00;\n  opacity: 1;\n}\n/* play button triangle */\n.styles-module_yt-lite__1-uDa > .styles-module_lty-playbtn__1pxDJ:before {\n  content: '';\n  border-style: solid;\n  border-width: 11px 0 11px 19px;\n  border-color: transparent transparent transparent #fff;\n}\n\n.styles-module_yt-lite__1-uDa > .styles-module_lty-playbtn__1pxDJ,\n.styles-module_yt-lite__1-uDa > .styles-module_lty-playbtn__1pxDJ:before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n\n/* Post-click styles */\n.styles-module_yt-lite__1-uDa.styles-module_lyt-activated__3ROp0 {\n  cursor: unset;\n}\n.styles-module_yt-lite__1-uDa.styles-module_lyt-activated__3ROp0::before,\n.styles-module_yt-lite__1-uDa.styles-module_lyt-activated__3ROp0 > .styles-module_lty-playbtn__1pxDJ {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.styles-module_yt-lite-thumbnail__2WX0n {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  object-fit: cover;\n}\n";
var styles = {"yt-lite":"styles-module_yt-lite__1-uDa","lty-playbtn":"styles-module_lty-playbtn__1pxDJ","lyt-activated":"styles-module_lyt-activated__3ROp0","yt-lite-thumbnail":"styles-module_yt-lite-thumbnail__2WX0n"};
styleInject(css_248z);

var qs = function qs(params) {
  return Object.keys(params).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
  }).join('&');
};

var LiteYoutubeEmbed = function LiteYoutubeEmbed(_ref) {
  var id = _ref.id,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$defaultPlay = _ref.defaultPlay,
      defaultPlay = _ref$defaultPlay === void 0 ? false : _ref$defaultPlay,
      _ref$adLinksPreconnec = _ref.adLinksPreconnect,
      adLinksPreconnect = _ref$adLinksPreconnec === void 0 ? true : _ref$adLinksPreconnec,
      _ref$isPlaylist = _ref.isPlaylist,
      isPlaylist = _ref$isPlaylist === void 0 ? false : _ref$isPlaylist,
      _ref$noCookie = _ref.noCookie,
      noCookie = _ref$noCookie === void 0 ? true : _ref$noCookie,
      _ref$mute = _ref.mute,
      mute = _ref$mute === void 0 ? true : _ref$mute,
      _ref$isMobile = _ref.isMobile,
      isMobile = _ref$isMobile === void 0 ? false : _ref$isMobile,
      _ref$mobileResolution = _ref.mobileResolution,
      mobileResolution = _ref$mobileResolution === void 0 ? 'hqdefault' : _ref$mobileResolution,
      _ref$desktopResolutio = _ref.desktopResolution,
      desktopResolution = _ref$desktopResolutio === void 0 ? 'maxresdefault' : _ref$desktopResolutio,
      _ref$lazyImage = _ref.lazyImage,
      lazyImage = _ref$lazyImage === void 0 ? false : _ref$lazyImage,
      _ref$iframeTitle = _ref.iframeTitle,
      iframeTitle = _ref$iframeTitle === void 0 ? "YouTube video." : _ref$iframeTitle,
      _ref$imageAltText = _ref.imageAltText,
      imageAltText = _ref$imageAltText === void 0 ? "YouTube's thumbnail image for the video." : _ref$imageAltText;
  var muteParam = mute || defaultPlay ? '1' : '0'; // Default play must be mute

  var queryString = useMemo(function () {
    return qs(_extends({
      autoplay: '1',
      mute: muteParam
    }, params));
  }, []);
  var defaultPosterUrl = isMobile ? "https://i.ytimg.com/vi_webp/" + id + "/" + mobileResolution + ".webp" : "https://i.ytimg.com/vi_webp/" + id + "/" + desktopResolution + ".webp";
  var fallbackPosterUrl = isMobile ? "https://i.ytimg.com/vi/" + id + "/" + mobileResolution + ".jpg" : "https://i.ytimg.com/vi/" + id + "/" + desktopResolution + ".jpg";
  var ytUrl = noCookie ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
  var iframeSrc = isPlaylist ? ytUrl + "/embed/videoseries?list=" + id : ytUrl + "/embed/" + id + "?" + queryString; // * Lo, the youtube placeholder image!  (aka the thumbnail, poster image, etc)

  var _useState = useState(false),
      isPreconnected = _useState[0],
      setIsPreconnected = _useState[1];

  var _useState2 = useState(defaultPlay),
      iframeLoaded = _useState2[0],
      setIframeLoaded = _useState2[1];

  var _useState3 = useState(defaultPosterUrl),
      posterUrl = _useState3[0],
      setPosterUrl = _useState3[1];

  var isWebpSupported = useRef(true);
  var warmConnections = useCallback(function () {
    if (isPreconnected) return;
    setIsPreconnected(true);
  }, []);
  var loadIframeFunc = useCallback(function () {
    if (iframeLoaded) return;
    setIframeLoaded(true);
  }, []); // fallback to hqdefault resolution if maxresdefault is not supported.

  useEffect(function () {
    if (isMobile && mobileResolution === 'hqdefault' || !isMobile && desktopResolution === 'hqdefault' && !isWebpSupported.current) return; // If the image ever loaded one time (in this case is preload link), this part will use cache data, won't cause a new network request.

    var img = new Image();

    img.onload = function () {
      if (img.width === 120 || img.width === 0) {
        if (!isWebpSupported.current) setPosterUrl("https://i.ytimg.com/vi/" + id + "/hqdefault.jpg");else setPosterUrl("https://i.ytimg.com/vi_webp/" + id + "/hqdefault");
      }
    };

    img.onerror = function () {
      isWebpSupported.current = false;
      setPosterUrl(fallbackPosterUrl);
    };

    img.src = posterUrl;
  }, [id, posterUrl]);
  return React.createElement(React.Fragment, null, React.createElement("link", {
    rel: 'preload',
    href: posterUrl,
    as: 'image'
  }), isPreconnected && React.createElement(React.Fragment, null, React.createElement("link", {
    rel: 'preconnect',
    href: ytUrl
  }), React.createElement("link", {
    rel: 'preconnect',
    href: 'https://www.google.com'
  })), isPreconnected && adLinksPreconnect && React.createElement(React.Fragment, null, React.createElement("link", {
    rel: 'preconnect',
    href: 'https://static.doubleclick.net'
  }), React.createElement("link", {
    rel: 'preconnect',
    href: 'https://googleads.g.doubleclick.net'
  })), React.createElement("div", {
    onClick: loadIframeFunc,
    onPointerOver: warmConnections,
    className: styles['yt-lite'] + " " + (iframeLoaded && styles['lyt-activated']),
    "data-testid": 'lite-yt-embed'
  }, React.createElement("img", {
    src: posterUrl,
    className: "" + styles['yt-lite-thumbnail'],
    loading: lazyImage ? 'lazy' : undefined,
    alt: imageAltText
  }), React.createElement("div", {
    className: "" + styles['lty-playbtn']
  }), iframeLoaded && React.createElement("iframe", {
    width: '560',
    height: '315',
    frameBorder: '0',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    allowFullScreen: true,
    title: iframeTitle,
    src: iframeSrc
  })));
};

export { LiteYoutubeEmbed };
//# sourceMappingURL=react-lite-yt-embed.esm.js.map
