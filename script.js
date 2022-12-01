// ==UserScript==
// @name         Google_Docs_Ontask
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://docs.google.com/document/d/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

setInterval(() => {
    document.querySelectorAll(".docs-title-save-label-text-link")[0].innerHTML="Last edit was seconds ago";
}, 3000);
