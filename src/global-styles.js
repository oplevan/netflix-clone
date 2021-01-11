import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body {
 font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 background-color: black;
 color: #333;
 font-size: 16px;
 width: 100%;
 height: 100%;
}

a {
   color: #ffffff;
   text-decoration: none
}
a:hover,
a:visited {
   text-decoration: none
}

audio, canvas, progress, video {
 display: inline-block;
 vertical-align: baseline;
}

.animation-img {
 margin: 0 1em 0 0;
 -webkit-box-flex: 0;
 -webkit-flex-grow: 0;
 -moz-box-flex: 0;
 -ms-flex-positive: 0;
 flex-grow: 0;
 -webkit-flex-shrink: 0;
 -ms-flex-negative: 0;
 flex-shrink: 0;
}

.animation-img img {
 height: 5em;
}

animation-text {
   -webkit-box-flex: 1;
   -webkit-flex-grow: 1;
   -moz-box-flex: 1;
   -ms-flex-positive: 1;
   flex-grow: 1;
   -webkit-flex-shrink: 1;
   -ms-flex-negative: 1;
   flex-shrink: 1;
   margin: .3em 0;
}

.text-0 {
   color: #fff;
   font-weight: 600;
   font-size: .9em;
}

.text-1 {
   color: #0071eb;
   font-weight: 600;
   font-size: .9em;
   margin-top: 5px;
}

.downloadAndWatch .animation:after {
   position: absolute;
   right: 15px;
   width: 3em;
   height: 3em;
   outline: 2px solid #000;
   outline-offset: -2px;
   display: block;
   background: url(/images/misc/download-icon.gif) center center no-repeat;
   -webkit-background-size: 100% 100%;
   -moz-background-size: 100%;
   background-size: 100%;
   content: '';
   -webkit-box-flex: 0;
   -webkit-flex-grow: 0;
   -moz-box-flex: 0;
   -ms-flex-positive: 0;
   flex-grow: 0;
   -webkit-flex-shrink: 0;
   -ms-flex-negative: 0;
   flex-shrink: 0;
}

.downloadAndWatch .second-pane {
   display: flex;
   justify-content: center;
   margin: -6% 0 0 -15%;
}

@media only screen and (max-width: 1000px) {
   .downloadAndWatch .second-pane {
      margin: 0;
   }
}

.watchOnTv .animation {
 max-width: 74%;
 max-height: 58%;
 position: absolute;
 top: 49%;
 left: 50.5%;
}

.downloadAndWatch .animation {
 padding: 10px;
 left: 50%;
 bottom: 8%;
 margin: 0 auto;
 background: #000;
 display: flex;
 align-items: center;
 width: 60%;
 height: auto;
 z-index: 2;
 border: 2px solid rgba(255,255,255,.25);
 -webkit-box-shadow: 0 0 2em 0 #000;
 -moz-box-shadow: 0 0 2em 0 #000;
 box-shadow: 0 0 2em 0 #000;
 -webkit-border-radius: .75em;
 -moz-border-radius: .75em;
 border-radius: .75em;
}

.watchOnDevice .animation {
 max-width: 63%;
 max-height: 47%;
 position: absolute;
 top: 34%;
 left: 50%;
}
`;
