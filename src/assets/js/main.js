import objectFitImages from "object-fit-images";
import LazyLoad from "vanilla-lazyload";
import svg4everybody from "svg4everybody/dist/svg4everybody.legacy.js";

//import * as module from "./modules/module.js";

new LazyLoad({
    elements_selector: ".js-lazy"
});

document.addEventListener("DOMContentLoaded", function() {

    objectFitImages();
    svg4everybody();

    console.log("Document ready");
});

window.onload = function () {

    console.log("Window load");
};

window.onscroll = function() {
    //scrolled = window.pageYOffset || document.documentElement.scrollTop;

};