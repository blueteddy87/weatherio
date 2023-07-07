'use strict';

import { fetchData, url } from "./api.js";
import * as module from "./module.js";

/**
 * Add event listener on multiple elements
 * @param {NodeList} elements Elements node array 
 * @param {string} eventType Event Type e.g.: "click", "mouseover" 
 * @param {Function} callback Callback function
 */

const addEventListener = function (elements, eventType, callback) {
    for (const element of elements) element.addEventListener(eventType, callback);
}

/**
 * Toggle search in mobile devices
 */

const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle('active');
addEventOnElements(searchTogglers, "click", toggleSearch);