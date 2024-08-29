// ==UserScript==
// @name         document dark mode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  null
// @author       null
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const css = `
      body, html {
          background-color: #181817 !important;
          color: #d3d3d3 !important;
      }
      * {
          background-color: inherit !important;
          color: inherit !important;
          border-color: #181817 !important;
      }
      a {
          color: #d3d3d3 !important;
      }
      img {
          filter: brightness(0.7) contrast(1.2) !important;
      }
  `;

  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();
