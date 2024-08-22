// ==UserScript==
// @name         Beautify Twitter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove some elements from Twitter.
// @author       Ethan
// @match        https://x.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // 
  const hrefsToRemove = [
      '/i/verified-orgs-signup',
      '/i/premium_sign_up',
      '/i/grok',
      '/settings/monetization',
      'https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb',
      '/jobs'
  ];

  function removeLinkElement() {
      document.querySelectorAll('a').forEach(link => {
          if (hrefsToRemove.includes(link.getAttribute('href'))) {
            link.style.display = 'none';
          }
      });
  }

  function removeFirstChild(selector) {
      var parentElement = document.querySelector(selector);

      if (parentElement && parentElement.firstChild) {
        parentElement.firstChild.style.display = 'none';
      }
  }

  const observer = new MutationObserver(() => {
      removeLinkElement();
      removeFirstChild('.css-175oi2r.r-kemksi.r-1kqtdi0.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x');
  });

  observer.observe(document.body, {
      childList: true,
      subtree: true
  });

  removeLinkElement();

})();