// ==UserScript==
// @name         Dcard Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  null
// @author       null
// @match        https://www.dcard.tw/*
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
      * :not(em):not(.d_gy_1x2esgu):not(.d_34_2q):not(.d_5s_28):not(.d_nf_1y) {
          background-color: inherit !important;
          color: inherit !important;
          border-color: #181817 !important;
      }
      a {
          color: #d3d3d3 !important;
      }
      input, textarea, select, button {
          background-color: #181618 !important;
          color: #d3d3d3 !important;
          border: 1px solid #181817 !important;
      }
      input::placeholder, textarea::placeholder {
          color: #a9a9a9 !important;
      }
      .d_nf_1y {
          --1m8iehv: inherit !important;
      }
      .pf9i80d::after {
          background-color: #3397CF !important;
      }
      img {
          filter: brightness(0.7) contrast(1.2) !important;
      }
      .d_xe_3b.d_ei_3b.d_9w_25.d_an_8.d_10fpds0_1j.epy1cme {
          fill: #d3d3d3 !important;
      }
  `;

  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();
