//import $ from "jquery";

import objectFitImages from "object-fit-images";
import LazyLoad from "vanilla-lazyload";
import svg4everybody from "svg4everybody/dist/svg4everybody.legacy.js";

//require('imports-loader?window.jQuery=jquery!../../node_modules/jquery-validation/dist/jquery.validate.min.js');

//import * as module from "./modules/module.js";

let lazyLoadInstance = new LazyLoad({
    elements_selector: ".js-lazy"
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Document ready");

    objectFitImages();
    svg4everybody();
});

window.onload = function () {
    console.log("Window load");

    if (lazyLoadInstance) {
        lazyLoadInstance.update();
    }
};

window.onscroll = function() {
    //scrolled = window.pageYOffset || document.documentElement.scrollTop;

};